import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, Send, User } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    category: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Campos requeridos",
        description: "Por favor, completa todos los campos obligatorios.",
        variant: "destructive"
      });
      return;
    }

    // In a real app, this would send the form data to a server
    toast({
      title: "Mensaje enviado",
      description: "Tu consulta ha sido enviada exitosamente. Te responderemos pronto.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      category: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: ["practicas.inf@usm.cl", "contacto@portal-practicas.usm.cl"],
      description: "Para consultas generales y soporte técnico"
    },
    {
      icon: Phone,
      title: "Teléfono",
      details: ["+56 32 2654000", "+56 32 2654001"],
      description: "Horario de atención telefónica"
    },
    {
      icon: MapPin,
      title: "Ubicación",
      details: ["Av. España 1680", "Valparaíso, Chile"],
      description: "Departamento de Informática, 3er Piso"
    },
    {
      icon: Clock,
      title: "Horarios",
      details: ["Lunes a Viernes", "9:00 - 17:00 hrs"],
      description: "Atención presencial y telefónica"
    }
  ];

  const team = [
    {
      name: "Dr. Carlos Mendoza",
      role: "Director de Prácticas",
      email: "carlos.mendoza@usm.cl",
      phone: "+56 32 2654100"
    },
    {
      name: "Ing. Ana Patricia López",
      role: "Coordinadora Académica",
      email: "ana.lopez@usm.cl", 
      phone: "+56 32 2654101"
    },
    {
      name: "Lic. Roberto Silva",
      role: "Coordinador de Empresas",
      email: "roberto.silva@usm.cl",
      phone: "+56 32 2654102"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold gradient-text">Contacto</h1>
          <p className="text-muted-foreground">
            ¿Tienes dudas o necesitas ayuda? Estamos aquí para apoyarte
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <Card className="card-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Send className="h-5 w-5" />
                Envía tu consulta
              </CardTitle>
              <CardDescription>
                Completa el formulario y te responderemos en menos de 24 horas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre Completo *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Tu nombre y apellido"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="tu.email@sansano.usm.cl"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+56 9 1234 5678"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="category">Categoría</Label>
                    <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona una categoría" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">Consulta General</SelectItem>
                        <SelectItem value="technical">Problema Técnico</SelectItem>
                        <SelectItem value="internship">Sobre Prácticas</SelectItem>
                        <SelectItem value="company">Empresas/Ofertas</SelectItem>
                        <SelectItem value="academic">Consulta Académica</SelectItem>
                        <SelectItem value="other">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Asunto *</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => handleInputChange("subject", e.target.value)}
                    placeholder="Resumen breve de tu consulta"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Describe tu consulta o problema en detalle..."
                    className="min-h-[120px]"
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  <Send className="h-4 w-4 mr-2" />
                  Enviar Mensaje
                </Button>

                <p className="text-xs text-muted-foreground">
                  * Campos obligatorios. Tu información será tratada de forma confidencial.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle>Información de Contacto</CardTitle>
                <CardDescription>
                  Múltiples formas de comunicarte con nosotros
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-lg gradient-bg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-medium">{info.title}</h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-sm font-medium text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                        <p className="text-xs text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Team */}
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Nuestro Equipo
                </CardTitle>
                <CardDescription>
                  Profesionales dedicados a tu éxito académico
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {team.map((member, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <h4 className="font-medium">{member.name}</h4>
                    <p className="text-sm text-primary mb-2">{member.role}</p>
                    <div className="space-y-1 text-xs text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Mail className="h-3 w-3" />
                        <span>{member.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-3 w-3" />
                        <span>{member.phone}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Emergency Contact */}
        <Card className="card-shadow border-l-4 border-l-warning">
          <CardHeader>
            <CardTitle className="text-warning">Contacto de Emergencia</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-2">
              Para situaciones urgentes durante prácticas profesionales:
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-warning" />
                <span className="font-medium">+56 9 8765 4321</span>
                <span className="text-muted-foreground">(24/7)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-warning" />
                <span className="font-medium">emergencia.practicas@usm.cl</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;