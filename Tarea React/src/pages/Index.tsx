import { GraduationCap, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-6 py-12">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Portal de Prácticas
            <span className="block gradient-text">USM Informática</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conecta con las mejores oportunidades de práctica profesional en el área de informática
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild className="hero-gradient text-white">
            <Link to="/ofertas">Explorar Ofertas</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/perfil">Mi Perfil</Link>
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid gap-6 md:grid-cols-3">
        <Card className="card-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ofertas Activas</CardTitle>
            <TrendingUp className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold gradient-text">127</div>
            <p className="text-xs text-muted-foreground">
              +12% respecto al mes anterior
            </p>
          </CardContent>
        </Card>
        <Card className="card-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Empresas Registradas</CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold gradient-text">89</div>
            <p className="text-xs text-muted-foreground">
              Empresas verificadas
            </p>
          </CardContent>
        </Card>
        <Card className="card-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Estudiantes Activos</CardTitle>
            <GraduationCap className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold gradient-text">342</div>
            <p className="text-xs text-muted-foreground">
              Estudiantes registrados
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Features Section */}
      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card className="card-shadow">
          <CardHeader>
            <CardTitle>Búsqueda Avanzada</CardTitle>
            <CardDescription>
              Filtra ofertas por área, región, modalidad y más criterios específicos
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="card-shadow">
          <CardHeader>
            <CardTitle>Seguimiento</CardTitle>
            <CardDescription>
              Monitorea el estado de tus postulaciones en tiempo real
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="card-shadow">
          <CardHeader>
            <CardTitle>Perfil Completo</CardTitle>
            <CardDescription>
              Gestiona tu información académica y personal en un solo lugar
            </CardDescription>
          </CardHeader>
        </Card>
      </section>
    </div>
  );
};

export default Index;
