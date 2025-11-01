import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, TrendingDown, Users, Building, Briefcase, GraduationCap } from "lucide-react";

const Statistics = () => {
  const stats = {
    overview: [
      {
        title: "Total Estudiantes",
        value: "342",
        change: "+12%",
        trend: "up",
        icon: Users
      },
      {
        title: "Empresas Activas", 
        value: "89",
        change: "+8%",
        trend: "up",
        icon: Building
      },
      {
        title: "Ofertas Publicadas",
        value: "127",
        change: "+23%",
        trend: "up",
        icon: Briefcase
      },
      {
        title: "Prácticas Completadas",
        value: "78",
        change: "+15%",
        trend: "up", 
        icon: GraduationCap
      }
    ],
    areas: [
      { name: "Desarrollo Web", percentage: 35, applications: 142 },
      { name: "Data Science", percentage: 25, applications: 98 },
      { name: "Ciberseguridad", percentage: 20, applications: 76 },
      { name: "Bases de Datos", percentage: 12, applications: 45 },
      { name: "Machine Learning", percentage: 8, applications: 31 }
    ],
    regions: [
      { name: "Región Metropolitana", percentage: 45, offers: 57 },
      { name: "Región de Valparaíso", percentage: 20, offers: 25 },
      { name: "Región del Biobío", percentage: 15, offers: 19 },
      { name: "Región de la Araucanía", percentage: 12, offers: 15 },
      { name: "Otras Regiones", percentage: 8, offers: 11 }
    ]
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold gradient-text">Estadísticas</h1>
          <p className="text-muted-foreground">Métricas y análisis del portal de prácticas</p>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.overview.map((stat, index) => {
            const Icon = stat.icon;
            const isPositive = stat.trend === "up";
            
            return (
              <Card key={index} className="card-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="flex items-center gap-1 mt-1">
                    {isPositive ? (
                      <TrendingUp className="h-3 w-3 text-success" />
                    ) : (
                      <TrendingDown className="h-3 w-3 text-destructive" />
                    )}
                    <span className={`text-xs ${isPositive ? 'text-success' : 'text-destructive'}`}>
                      {stat.change}
                    </span>
                    <span className="text-xs text-muted-foreground">vs mes anterior</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Areas and Regions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Areas más populares */}
          <Card className="card-shadow">
            <CardHeader>
              <CardTitle>Áreas Más Populares</CardTitle>
              <CardDescription>
                Distribución de postulaciones por área de especialización
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {stats.areas.map((area, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{area.name}</span>
                    <div className="text-right">
                      <Badge variant="outline">{area.percentage}%</Badge>
                      <p className="text-xs text-muted-foreground mt-1">
                        {area.applications} postulaciones
                      </p>
                    </div>
                  </div>
                  <Progress value={area.percentage} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Distribución por regiones */}
          <Card className="card-shadow">
            <CardHeader>
              <CardTitle>Distribución por Regiones</CardTitle>
              <CardDescription>
                Ofertas de práctica disponibles por región
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {stats.regions.map((region, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{region.name}</span>
                    <div className="text-right">
                      <Badge variant="outline">{region.percentage}%</Badge>
                      <p className="text-xs text-muted-foreground mt-1">
                        {region.offers} ofertas
                      </p>
                    </div>
                  </div>
                  <Progress value={region.percentage} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Success Metrics */}
        <Card className="card-shadow">
          <CardHeader>
            <CardTitle>Métricas de Éxito</CardTitle>
            <CardDescription>
              Indicadores clave de rendimiento del programa de prácticas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-success">87%</div>
                <p className="text-sm text-muted-foreground">Tasa de Colocación</p>
                <p className="text-xs text-muted-foreground">
                  Estudiantes que encuentran práctica
                </p>
              </div>
              
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-primary">4.6</div>
                <p className="text-sm text-muted-foreground">Satisfacción Promedio</p>
                <p className="text-xs text-muted-foreground">
                  Calificación de estudiantes
                </p>
              </div>
              
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-warning">92%</div>
                <p className="text-sm text-muted-foreground">Tasa de Finalización</p>
                <p className="text-xs text-muted-foreground">
                  Prácticas completadas exitosamente
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Trends */}
        <Card className="card-shadow">
          <CardHeader>
            <CardTitle>Tendencias del Semestre</CardTitle>
            <CardDescription>
              Análisis de patrones y tendencias en el programa
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-medium">Áreas en Crecimiento</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Machine Learning</span>
                    <Badge className="bg-success text-success-foreground">+45%</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Ciberseguridad</span>
                    <Badge className="bg-success text-success-foreground">+32%</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Data Science</span>
                    <Badge className="bg-success text-success-foreground">+28%</Badge>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-medium">Modalidades Preferidas</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Híbrido</span>
                    <Badge variant="outline">45%</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Presencial</span>
                    <Badge variant="outline">35%</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Remoto</span>
                    <Badge variant="outline">20%</Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Statistics;