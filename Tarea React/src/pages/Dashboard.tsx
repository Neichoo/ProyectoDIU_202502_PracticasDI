import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarDays } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

type ApplicationStatus = "esperando" | "aceptada" | "rechazada" | "confirmada" | "declinada";

interface Application {
  id: number;
  position: string;
  company: string;
  status: ApplicationStatus;
  applicationDate: string;
  responseDate?: string;
  comment?: string;
}

const Dashboard = () => {
  const [applications, setApplications] = useState<Application[]>([
    {
      id: 1,
      position: "Desarrollador Full Stack",
      company: "TechCorp Chile",
      status: "aceptada",
      applicationDate: "14/1/2024",
      responseDate: "21/1/2024",
    },
    {
      id: 2,
      position: "Machine Learning Engineer",
      company: "AI Solutions",
      status: "aceptada",
      applicationDate: "11/1/2024",
      responseDate: "18/1/2024",
    },
    {
      id: 3,
      position: "Analista de Datos",
      company: "DataSoft Solutions",
      status: "rechazada",
      applicationDate: "9/1/2024",
      responseDate: "17/1/2024",
      comment:
        "El perfil no se ajusta completamente a los requerimientos técnicos específicos del puesto.",
    },
    {
      id: 4,
      position: "Desarrollador Mobile",
      company: "InnovaTech SpA",
      status: "esperando",
      applicationDate: "10/1/2024",
    },
  ]);

  const getStatusColor = (status: ApplicationStatus) => {
    switch (status) {
      case "aceptada":
        return "bg-green-600 text-white";
      case "rechazada":
        return "bg-red-600 text-white";
      case "esperando":
        return "bg-yellow-500 text-black";
      case "confirmada":
        return "bg-blue-600 text-white";
      case "declinada":
        return "bg-red-700 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  const handleConfirm = (application: Application) => {
    setApplications((apps) =>
      apps.map((app) =>
        app.id === application.id ? { ...app, status: "confirmada" } : app
      )
    );
    toast({
      title: "Práctica confirmada",
      description: `Has confirmado tu práctica como ${application.position}.`,
    });
  };

  const handleDecline = (application: Application) => {
    setApplications((apps) =>
      apps.map((app) =>
        app.id === application.id ? { ...app, status: "declinada" } : app
      )
    );
    toast({
      title: "Postulación anulada",
      description: `Has anulado tu postulación a ${application.position}.`,
      variant: "destructive",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <h1 className="text-3xl font-bold text-center mb-6 gradient-text">
        Postulaciones
      </h1>

      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Mis Postulaciones</h2>

        {applications.map((application) => (
          <Card
            key={application.id}
            className="border border-border bg-white text-black dark:bg-neutral-900 dark:text-white transition-colors"
          >
            <CardHeader>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div className="flex flex-col space-y-1">
                  <CardTitle className="text-lg font-semibold">
                    {application.position}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {application.company}
                  </CardDescription>
                </div>

                <Badge
                  className={`${getStatusColor(
                    application.status
                  )} px-3 py-1 rounded-full text-sm mt-3 md:mt-0`}
                >
                  {application.status === "declinada"
                    ? "Anulada"
                    : application.status.charAt(0).toUpperCase() +
                      application.status.slice(1)}
                </Badge>
              </div>
            </CardHeader>

            <CardContent>
              <div className="flex justify-between text-sm text-muted-foreground mb-3">
                <div className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" />
                  <span>
                    <strong>Postulación:</strong> {application.applicationDate}
                  </span>
                </div>

                {application.responseDate && (
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4" />
                    <span>
                      <strong>Respuesta:</strong> {application.responseDate}
                    </span>
                  </div>
                )}
              </div>

              {application.status === "rechazada" && application.comment && (
                <div className="bg-muted p-3 rounded-md text-sm mb-4">
                  <p className="font-medium mb-1">Comentarios:</p>
                  <p className="text-muted-foreground">{application.comment}</p>
                </div>
              )}

              {application.status === "aceptada" && (
                <div className="flex flex-wrap gap-2">
                  <Button
                    className="bg-green-600 hover:bg-green-700 text-white"
                    onClick={() => handleConfirm(application)}
                  >
                    Confirmar Práctica
                  </Button>

                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="destructive">Anular Postulación</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent className="bg-white text-black dark:bg-neutral-900 dark:text-white border border-border">
                      <AlertDialogHeader>
                        <AlertDialogTitle>¿Estás seguro?</AlertDialogTitle>
                        <AlertDialogDescription className="text-muted-foreground">
                          Esta acción no se puede deshacer. Tu postulación será
                          anulada permanentemente.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel className="bg-muted hover:bg-muted/80">
                          Cancelar
                        </AlertDialogCancel>
                        <AlertDialogAction
                          className="bg-red-700 hover:bg-red-800 text-white"
                          onClick={() => handleDecline(application)}
                        >
                          Sí, anular
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              )}

              {application.status === "esperando" && (
                <p className="text-muted-foreground italic">
                  La empresa aún no responde tu postulación.
                </p>
              )}

              {application.status === "confirmada" && (
                <p className="text-blue-500 italic">
                  Has confirmado tu práctica. ¡Felicidades!
                </p>
              )}

              {application.status === "declinada" && (
                <p className="text-red-500 italic">
                  Has anulado tu postulación.
                </p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
