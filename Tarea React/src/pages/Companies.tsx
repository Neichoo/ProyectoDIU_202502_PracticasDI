import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building, MapPin, Users, Star } from "lucide-react";

const Companies = () => {
  const companies = [
    {
      id: "1",
      name: "TechCorp Chile",
      sector: "Desarrollo de Software",
      location: "Las Condes, Santiago",
      employees: "50-200",
      rating: 4.5,
      activeOffers: 3,
      description: "Empresa líder en desarrollo de soluciones tecnológicas para el sector financiero."
    },
    {
      id: "2", 
      name: "DataSoft Solutions",
      sector: "Ciencia de Datos",
      location: "Valparaíso",
      employees: "20-50",
      rating: 4.2,
      activeOffers: 2,
      description: "Especialistas en análisis de datos e inteligencia artificial para empresas."
    },
    {
      id: "3",
      name: "CyberSecure Corp",
      sector: "Ciberseguridad",
      location: "Santiago",
      employees: "100-500",
      rating: 4.7,
      activeOffers: 4,
      description: "Empresa de ciberseguridad con presencia internacional."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold gradient-text">Empresas</h1>
          <p className="text-muted-foreground">Conoce las empresas que ofrecen prácticas profesionales</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="card-shadow text-center">
            <CardContent className="p-6">
              <div className="text-2xl font-bold gradient-text">{companies.length}</div>
              <p className="text-sm text-muted-foreground">Empresas Registradas</p>
            </CardContent>
          </Card>
          <Card className="card-shadow text-center">
            <CardContent className="p-6">
              <div className="text-2xl font-bold gradient-text">
                {companies.reduce((sum, company) => sum + company.activeOffers, 0)}
              </div>
              <p className="text-sm text-muted-foreground">Ofertas Activas</p>
            </CardContent>
          </Card>
          <Card className="card-shadow text-center">
            <CardContent className="p-6">
              <div className="text-2xl font-bold gradient-text">
                {(companies.reduce((sum, company) => sum + company.rating, 0) / companies.length).toFixed(1)}
              </div>
              <p className="text-sm text-muted-foreground">Calificación Promedio</p>
            </CardContent>
          </Card>
        </div>

        {/* Companies List */}
        <div className="grid gap-6">
          {companies.map((company) => (
            <Card key={company.id} className="card-shadow">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="flex items-center gap-2">
                      <Building className="h-5 w-5" />
                      {company.name}
                    </CardTitle>
                    <CardDescription>{company.description}</CardDescription>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="font-medium">{company.rating}</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">{company.sector}</Badge>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{company.location}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{company.employees} empleados</span>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div className="text-sm">
                    <span className="font-medium text-primary">{company.activeOffers}</span>
                    <span className="text-muted-foreground"> ofertas activas</span>
                  </div>
                  
                  <Button variant="outline">
                    Ver Ofertas
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Companies;