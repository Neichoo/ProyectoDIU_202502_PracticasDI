import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, MapPin, Clock, Users, Building } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface JobOffer {
  id: string;
  company: string;
  position: string;
  area: string;
  region: string;
  modalidad: string;
  duracion: string;
  horario: string;
  address: string;
  applicants: number;
  description: string;
  requirements: string[];
}

const Offers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({
    area: [],
    region: [],
    modalidad: [],
    duracion: [],
    horario: []
  });

  const [offers] = useState<JobOffer[]>([
    {
      id: "1",
      company: "TechCorp Chile",
      position: "Desarrollador Full Stack",
      area: "Desarrollo Web",
      region: "Región Metropolitana",
      modalidad: "Híbrido",
      duracion: "6 meses",
      horario: "9:00-18:00",
      address: "Av. Vitacura 2939, Torre B, Piso 15, Las Condes, Santiago",
      applicants: 12,
      description: "Desarrollar aplicaciones web utilizando tecnologías modernas como React, Node.js y bases de datos relacionales.",
      requirements: ["React", "Node.js", "JavaScript", "Git"]
    },
    {
      id: "2",
      company: "DataSoft Solutions", 
      position: "Analista de Datos",
      area: "Data Science",
      region: "Región de Valparaíso",
      modalidad: "Presencial",
      duracion: "4 meses",
      horario: "8:00-17:00",
      address: "Plaza Victoria 1398, Oficina 504, Valparaíso Centro",
      applicants: 8,
      description: "Análisis de grandes volúmenes de datos para generar insights de negocio utilizando Python y herramientas de visualización.",
      requirements: ["Python", "SQL", "Power BI", "Estadística"]
    },
    {
      id: "3",
      company: "CyberSecure Corp",
      position: "Especialista en Ciberseguridad",
      area: "Ciberseguridad", 
      region: "Región Metropolitana",
      modalidad: "Online",
      duracion: "5 meses",
      horario: "10:00-19:00",
      address: "Modalidad remota - Sin dirección física",
      applicants: 15,
      description: "Implementar y mantener sistemas de seguridad informática, realizar auditorías y análisis de vulnerabilidades.",
      requirements: ["Ethical Hacking", "Redes", "Linux", "Firewall"]
    },
    {
      id: "4",
      company: "InnovaTech SpA",
      position: "Desarrollador Mobile",
      area: "Desarrollo Mobile",
      region: "Región Metropolitana",
      modalidad: "Presencial",
      duracion: "5 meses",
      horario: "9:00-18:00",
      address: "Av. Providencia 1208, Oficina 801, Providencia, Santiago",
      applicants: 9,
      description: "Desarrollo de aplicaciones móviles nativas para iOS y Android usando React Native y Flutter.",
      requirements: ["React Native", "Flutter", "TypeScript", "Firebase"]
    },
    {
      id: "5",
      company: "CloudSystems Ltda",
      position: "DevOps Junior",
      area: "Cloud Computing",
      region: "Región de Valparaíso",
      modalidad: "Híbrido",
      duracion: "6 meses",
      horario: "8:00-17:00",
      address: "Av. Pedro Montt 2055, Edificio Plaza, Piso 8, Valparaíso",
      applicants: 6,
      description: "Gestión de infraestructura cloud, automatización de deployments y monitoreo de sistemas distribuidos.",
      requirements: ["AWS", "Docker", "Kubernetes", "Jenkins"]
    },
    {
      id: "6",
      company: "AI Solutions Chile",
      position: "Machine Learning Engineer",
      area: "Inteligencia Artificial",
      region: "Región Metropolitana",
      modalidad: "Híbrido",
      duracion: "6 meses",
      horario: "10:00-19:00",
      address: "Nueva Las Condes 12205, Torre Norte, Piso 22, Las Condes, Santiago",
      applicants: 18,
      description: "Desarrollo e implementación de modelos de machine learning para soluciones empresariales.",
      requirements: ["Python", "TensorFlow", "PyTorch", "MLOps"]
    }
  ]);

  const [filteredOffers, setFilteredOffers] = useState(offers);

  const filterOptions = {
    area: ["Desarrollo Web", "Data Science", "Ciberseguridad", "Bases de datos", "Machine Learning", "Desarrollo Mobile", "Cloud Computing", "Inteligencia Artificial"],
    region: ["Región Metropolitana", "Región de Valparaíso", "Región del Biobío", "Región de la Araucanía"],
    modalidad: ["Presencial", "Online", "Híbrido"],
    duracion: ["3 meses", "4 meses", "5 meses", "6 meses"],
    horario: ["8:00-17:00", "9:00-18:00", "10:00-19:00", "Flexible"]
  };

  const handleFilterChange = (category: string, value: string, checked: boolean) => {
    setSelectedFilters(prev => {
      const newFilters = { ...prev };
      if (checked) {
        newFilters[category] = [...newFilters[category], value];
      } else {
        newFilters[category] = newFilters[category].filter(item => item !== value);
      }
      return newFilters;
    });
  };

  const applyFilters = () => {
    let filtered = offers;

    // Text search
    if (searchQuery) {
      filtered = filtered.filter(offer => 
        offer.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
        offer.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        offer.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category filters
    Object.entries(selectedFilters).forEach(([category, values]) => {
      if (values.length > 0) {
        filtered = filtered.filter(offer => 
          values.includes(offer[category as keyof JobOffer] as string)
        );
      }
    });

    setFilteredOffers(filtered);
  };

  const clearFilters = () => {
    setSelectedFilters({
      area: [],
      region: [],
      modalidad: [],
      duracion: [],
      horario: []
    });
    setSearchQuery("");
    setFilteredOffers(offers);
  };

  const handleApply = (offerId: string) => {
    toast({
      title: "Postulación enviada",
      description: "Tu postulación ha sido enviada exitosamente. Te contactaremos pronto.",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold gradient-text">Ofertas de Práctica</h1>
          <p className="text-muted-foreground">Encuentra la práctica perfecta para tu carrera</p>
        </div>

        {/* Search and Filters */}
        <Card className="card-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              Búsqueda y Filtros
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Search Bar */}
            <div className="flex gap-2">
              <Input
                placeholder="Buscar por empresa, puesto o palabras clave..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1"
              />
              <Button onClick={applyFilters}>
                <Search className="h-4 w-4 mr-2" />
                Buscar
              </Button>
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {Object.entries(filterOptions).map(([category, options]) => (
                <div key={category} className="space-y-2">
                  <Label className="font-medium capitalize">
                    {category === "duracion" ? "Duración" : category}
                  </Label>
                  <div className="space-y-2 max-h-32 overflow-y-auto">
                    {options.map((option) => (
                      <div key={option} className="flex items-center space-x-2">
                        <Checkbox
                          id={`${category}-${option}`}
                          checked={selectedFilters[category].includes(option)}
                          onCheckedChange={(checked) => 
                            handleFilterChange(category, option, checked as boolean)
                          }
                        />
                        <Label 
                          htmlFor={`${category}-${option}`}
                          className="text-sm cursor-pointer"
                        >
                          {option}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-2">
              <Button onClick={applyFilters} className="flex-1">
                Aplicar Filtros
              </Button>
              <Button variant="outline" onClick={clearFilters}>
                Limpiar
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Results Summary */}
        <div className="flex justify-between items-center">
          <p className="text-muted-foreground">
            {filteredOffers.length} ofertas encontradas
          </p>
        </div>

        {/* Offers List */}
        <div className="grid gap-6">
          {filteredOffers.map((offer) => (
            <Card key={offer.id} className="card-shadow">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-xl">{offer.position}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <Building className="h-4 w-4" />
                      {offer.company}
                    </CardDescription>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">{offer.area}</Badge>
                    <Badge variant="outline">{offer.modalidad}</Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{offer.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <div>
                      <p className="font-medium">{offer.region}</p>
                      <p className="text-muted-foreground">{offer.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <div>
                      <p className="font-medium">{offer.duracion}</p>
                      <p className="text-muted-foreground">{offer.horario}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    <div>
                      <p className="font-medium">{offer.applicants} postulantes</p>
                      <p className="text-muted-foreground">hasta ahora</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium">Requisitos:</Label>
                  <div className="flex flex-wrap gap-1">
                    {offer.requirements.map((req, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {req}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full md:w-auto">
                      Postular a esta práctica
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[525px]">
                    <DialogHeader>
                      <DialogTitle>Postular a {offer.position}</DialogTitle>
                      <DialogDescription>
                        Completa el formulario para enviar tu postulación a {offer.company}
                      </DialogDescription>
                    </DialogHeader>
                    
                    <div className="grid gap-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="motivation">Carta de Motivación</Label>
                        <Textarea
                          id="motivation"
                          placeholder="Explica por qué te interesa esta práctica y qué puedes aportar..."
                          className="min-h-[100px]"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="experience">Experiencia Relevante</Label>
                        <Textarea
                          id="experience"
                          placeholder="Describe tu experiencia previa relacionada con el puesto..."
                          className="min-h-[80px]"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="availability">Disponibilidad</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona tu disponibilidad" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="immediate">Inmediata</SelectItem>
                            <SelectItem value="1month">En 1 mes</SelectItem>
                            <SelectItem value="2months">En 2 meses</SelectItem>
                            <SelectItem value="semester">Próximo semestre</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="portfolio">Portafolio / GitHub</Label>
                        <Input
                          id="portfolio"
                          type="url"
                          placeholder="https://github.com/tu-usuario o https://tu-portafolio.com"
                        />
                        <p className="text-xs text-muted-foreground">
                          Incluye tu portafolio o repositorio de GitHub para mostrar tus proyectos
                        </p>
                      </div>
                    </div>
                    
                    <Button onClick={() => handleApply(offer.id)} className="w-full">
                      Enviar Postulación
                    </Button>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredOffers.length === 0 && (
          <Card className="card-shadow">
            <CardContent className="p-8 text-center">
              <p className="text-muted-foreground">
                No se encontraron ofertas que coincidan con tus criterios de búsqueda.
              </p>
              <Button variant="outline" onClick={clearFilters} className="mt-4">
                Limpiar filtros
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Offers;