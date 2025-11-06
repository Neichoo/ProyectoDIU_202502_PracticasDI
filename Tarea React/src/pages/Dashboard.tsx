import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Calendar, Filter, ChevronDown, ChevronUp } from "lucide-react";
import { toast } from "@/hooks/use-toast";

type ApplicationStatus = "aceptada" | "rechazada" | "esperando" | "confirmada" | "declinada";

interface Application {
  id: string;
  company: string;
  position: string;
  status: ApplicationStatus;
  applicationDate: string;
  responseDate?: string;
  comments?: string;
}

const Dashboard = () => {
  const [applications, setApplications] = useState<Application[]>([
    {
      id: "1",
      company: "TechCorp Chile",
      position: "Desarrollador Full Stack",
      status: "aceptada",
      applicationDate: "2024-01-15",
      responseDate: "2024-01-22",
    },
    {
      id: "2",
      company: "AI Solutions",
      position: "Machine Learning Engineer",
      status: "aceptada",
      applicationDate: "2024-01-12",
      responseDate: "2024-01-19",
    },
    {
      id: "3", 
      company: "DataSoft Solutions",
      position: "Analista de Datos",
      status: "rechazada",
      applicationDate: "2024-01-10",
      responseDate: "2024-01-18",
      comments: "El perfil no se ajusta completamente a los requerimientos técnicos específicos del puesto."
    },
    {
      id: "4",
      company: "InnovaTech",
      position: "Desarrollador Mobile",
      status: "esperando",
      applicationDate: "2024-01-20",
    },
    {
      id: "5",
      company: "CloudSystems",
      position: "DevOps Junior",
      status: "esperando",
      applicationDate: "2024-01-25",
    },

  ]);

  const [filteredApplications, setFilteredApplications] = useState(applications);
  const [statusFilter, setStatusFilter] = useState<string>("todos");
  const [sortBy, setSortBy] = useState<string>("applicationDate");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const getStatusColor = (status: ApplicationStatus) => {
    switch (status) {
      case "aceptada":
        return "bg-success text-success-foreground";
      case "rechazada":
        return "bg-destructive text-destructive-foreground";
      case "esperando":
        return "bg-warning text-warning-foreground";
      case "confirmada":
        return "bg-primary text-primary-foreground";
      case "declinada":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getStatusText = (status: ApplicationStatus) => {
    switch (status) {
      case "aceptada":
        return "Aceptada";
      case "rechazada":
        return "Rechazada";
      case "esperando":
        return "Esperando Respuesta";
      case "confirmada":
        return "Práctica Confirmada";
      case "declinada":
        return "Práctica Declinada";
      default:
        return status;
    }
  };

  const handleFilter = () => {
    let filtered = applications;
    
    if (statusFilter !== "todos") {
      filtered = filtered.filter(app => app.status === statusFilter);
    }

    // Sort applications
    filtered = filtered.sort((a, b) => {
      let aValue, bValue;
      
      if (sortBy === "applicationDate") {
        aValue = new Date(a.applicationDate).getTime();
        bValue = new Date(b.applicationDate).getTime();
      } else if (sortBy === "responseDate") {
        aValue = a.responseDate ? new Date(a.responseDate).getTime() : 0;
        bValue = b.responseDate ? new Date(b.responseDate).getTime() : 0;
      } else {
        return 0;
      }

      return sortOrder === "asc" ? aValue - bValue : bValue - aValue;
    });

    setFilteredApplications(filtered);
  };

  const toggleSort = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    handleFilter();
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold gradient-text">Postulaciones</h1>
        </div>

        {/* Applications List */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Mis Postulaciones</h2>
          
          {filteredApplications.length === 0 ? (
            <Card className="card-shadow">
              <CardContent className="p-8 text-center">
                <p className="text-muted-foreground">No se encontraron postulaciones con los filtros aplicados.</p>
              </CardContent>
            </Card>
          ) : (
            filteredApplications.map((application) => (
              <Card key={application.id} className="card-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <CardTitle>{application.position}</CardTitle>
                      <CardDescription>{application.company}</CardDescription>
                    </div>
                    <Badge className={getStatusColor(application.status)}>
                      {getStatusText(application.status)}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Postulación:</span>
                      <span>{new Date(application.applicationDate).toLocaleDateString('es-ES')}</span>
                    </div>
                    {application.responseDate && (
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Respuesta:</span>
                        <span>{new Date(application.responseDate).toLocaleDateString('es-ES')}</span>
                      </div>
                    )}
                  </div>
                  
                  {application.comments && (
                    <div className="bg-muted p-3 rounded-md">
                      <p className="text-sm font-medium mb-1">Comentarios:</p>
                      <p className="text-sm text-muted-foreground">{application.comments}</p>
                    </div>
                  )}

                  {application.status === "aceptada" && (
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        className="bg-success hover:bg-success/90"
                        onClick={() => {
                          setApplications(apps => 
                            apps.map(app => 
                              app.id === application.id 
                                ? { ...app, status: "confirmada" as ApplicationStatus }
                                : app
                            )
                          );
                          toast({
                            title: "Práctica confirmada",
                            description: "Has confirmado la práctica con éxito. Te contactaremos pronto con más detalles.",
                          });
                        }}
                      >
                        Confirmar Práctica
                      </Button>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="outline" size="sm">
                            Anular Postulación
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>¿Estás seguro?</AlertDialogTitle>
                            <AlertDialogDescription>
                              Esta acción no se puede deshacer. Anularás permanentemente la postulación en {application.company}.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancelar</AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() => {
                                setApplications(apps => 
                                  apps.map(app => 
                                    app.id === application.id 
                                      ? { ...app, status: "declinada" as ApplicationStatus }
                                      : app
                                  )
                                );
                                toast({
                                  title: "Postulación anulada",
                                  description: "Has anulado tu postulación con éxito.",
                                  variant: "destructive",
                                });
                              }}
                            >
                              Anular Postulación
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  )}
                  
                  {(application.status === "confirmada" || application.status === "declinada") && (
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Ver Detalles
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;