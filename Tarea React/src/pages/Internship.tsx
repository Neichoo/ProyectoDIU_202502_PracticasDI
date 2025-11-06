import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Building, Calendar, MapPin, Clock, User, Phone, Mail } from "lucide-react";

const Internship = () => {
  // Mock data - in a real app this would come from state/API
  const internshipData = {
    company: "TechCorp Chile",
    position: "Desarrollador Full Stack",
    supervisor: "María González",
    startDate: "2024-03-01",
    endDate: "2024-08-31",
    status: "En curso",
    progress: 65,
    address: "Las Condes, Santiago",
    schedule: "9:00 - 18:00",
    supervisorEmail: "maria.gonzalez@techcorp.cl",
    supervisorPhone: "+56 2 2345 6789",
    description: "Desarrollo de aplicaciones web utilizando React, Node.js y PostgreSQL. Participación en proyectos de modernización de sistemas legacy.",
    objectives: [
      "Desarrollar competencias en tecnologías web modernas",
      "Participar en el ciclo completo de desarrollo de software",
      "Colaborar en equipo utilizando metodologías ágiles",
      "Implementar buenas prácticas de desarrollo y testing"
    ],
    activities: [
      {
        week: "Semana 1-2",
        description: "Inducción y configuración del ambiente de desarrollo",
        completed: true
      },
      {
        week: "Semana 3-6", 
        description: "Desarrollo de componentes frontend con React",
        completed: true
      },
      {
        week: "Semana 7-10",
        description: "Implementación de APIs REST con Node.js",
        completed: true
      },
      {
        week: "Semana 11-14",
        description: "Integración con base de datos y testing",
        completed: false
      },
      {
        week: "Semana 15-18",
        description: "Optimización y deployment",
        completed: false
      }
    ]
  };

  const completedActivities = internshipData.activities.filter(activity => activity.completed).length;
  const totalActivities = internshipData.activities.length;

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold gradient-text">Mi Práctica</h1>
          <p className="text-muted-foreground">Información y seguimiento de tu práctica actual</p>
        </div>

        {/* Status Overview */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="card-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>{internshipData.position}</CardTitle>
                  <CardDescription className="flex items-center gap-2 mt-2">
                    <Building className="h-4 w-4" />
                    {internshipData.company}
                  </CardDescription>
                </div>
                <Badge className="bg-success text-success-foreground">
                  {internshipData.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Inicio</p>
                    <p className="text-muted-foreground">
                      {new Date(internshipData.startDate).toLocaleDateString('es-ES')}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Término</p>
                    <p className="text-muted-foreground">
                      {new Date(internshipData.endDate).toLocaleDateString('es-ES')}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Ubicación</p>
                    <p className="text-muted-foreground">{internshipData.address}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Horario</p>
                    <p className="text-muted-foreground">{internshipData.schedule}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-shadow">
            <CardHeader>
              <CardTitle>Progreso General</CardTitle>
              <CardDescription>Avance de tu práctica profesional</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Progreso</span>
                  <span>{internshipData.progress}%</span>
                </div>
                <Progress value={internshipData.progress} className="h-3" />
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-success">{completedActivities}</div>
                  <p className="text-sm text-muted-foreground">Completadas</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-muted-foreground">
                    {totalActivities - completedActivities}
                  </div>
                  <p className="text-sm text-muted-foreground">Pendientes</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Supervisor Info */}
        <Card className="card-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Supervisor de Práctica
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-lg">{internshipData.supervisor}</p>
                  <p className="text-muted-foreground">{internshipData.company}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{internshipData.supervisorEmail}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{internshipData.supervisorPhone}</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Description */}
        <Card className="card-shadow">
          <CardHeader>
            <CardTitle>Descripción de la Práctica</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{internshipData.description}</p>
          </CardContent>
        </Card>

        {/* Objectives */}
        <Card className="card-shadow">
          <CardHeader>
            <CardTitle>Objetivos de Aprendizaje</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {internshipData.objectives.map((objective, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{objective}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Activities Timeline */}
        <Card className="card-shadow">
          <CardHeader>
            <CardTitle>Cronograma de Actividades</CardTitle>
            <CardDescription>
              Plan de actividades y su estado de avance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {internshipData.activities.map((activity, index) => (
                <div key={index} className="flex items-start gap-4 pb-4 border-b last:border-b-0">
                  <div className={`h-3 w-3 rounded-full mt-1 flex-shrink-0 ${
                    activity.completed ? 'bg-success' : 'bg-muted-foreground'
                  }`} />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">{activity.week}</p>
                      <Badge variant={activity.completed ? "default" : "secondary"}>
                        {activity.completed ? "Completada" : "Pendiente"}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mt-1">{activity.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Internship;