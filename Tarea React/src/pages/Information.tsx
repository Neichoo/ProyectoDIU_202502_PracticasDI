import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FileText, Calendar, Users, HelpCircle, Download, ExternalLink } from "lucide-react";

const Information = () => {
  const documents = [
    {
      title: "Reglamento de Prácticas Profesionales",
      description: "Normativa oficial para prácticas del Departamento de Informática",
      type: "PDF",
      size: "2.3 MB",
      updated: "2024-01-15"
    },
    {
      title: "Formulario de Evaluación",
      description: "Documento para evaluación de desempeño en práctica",
      type: "DOC",
      size: "156 KB", 
      updated: "2024-01-10"
    },
    {
      title: "Convenio de Práctica Tipo",
      description: "Plantilla de convenio entre estudiante, empresa y universidad",
      type: "PDF",
      size: "1.8 MB",
      updated: "2024-01-08"
    }
  ];

  const events = [
    {
      title: "Feria de Prácticas Profesionales 2024",
      date: "2024-03-15",
      time: "10:00 - 16:00",
      location: "Auditorio Central USM",
      description: "Evento presencial donde empresas presentan sus ofertas de práctica"
    },
    {
      title: "Taller: Preparación para Entrevistas",
      date: "2024-02-28",
      time: "14:00 - 16:00", 
      location: "Sala de Conferencias Dpto. Informática",
      description: "Workshop sobre técnicas de entrevista y presentación personal"
    },
    {
      title: "Charla: Tendencias Tecnológicas 2024",
      date: "2024-02-20",
      time: "15:30 - 17:00",
      location: "Virtual - Zoom",
      description: "Profesionales de la industria comparten las últimas tendencias"
    }
  ];

  const faqs = [
    {
      question: "¿Cuándo puedo realizar mi práctica profesional?",
      answer: "Las prácticas profesionales se pueden realizar a partir del 8vo semestre de la carrera, habiendo aprobado al menos 80% de los ramos del plan de estudios."
    },
    {
      question: "¿Cuál es la duración mínima de una práctica?",
      answer: "La duración mínima es de 3 meses (12 semanas) con una dedicación de al menos 30 horas semanales. La duración máxima recomendada es de 6 meses."
    },
    {
      question: "¿Puedo hacer mi práctica en el extranjero?",
      answer: "Sí, es posible realizar prácticas internacionales. Debes coordinar previamente con la Dirección de Prácticas y cumplir con los requisitos adicionales de documentación."
    },
    {
      question: "¿Qué documentos necesito para inscribir mi práctica?",
      answer: "Necesitas el convenio de práctica firmado, carta de aceptación de la empresa, programa de actividades y estar al día con tus pagos universitarios."
    },
    {
      question: "¿Cómo es el proceso de evaluación?",
      answer: "La evaluación incluye un informe del supervisor de la empresa, un informe técnico del estudiante y una presentación oral ante una comisión académica."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold gradient-text">Informaciones</h1>
          <p className="text-muted-foreground">Recursos, documentos y información importante sobre prácticas</p>
        </div>

        {/* Important Announcements */}
        <Card className="card-shadow border-l-4 border-l-primary">
          <CardHeader>
            <CardTitle className="text-primary">Anuncio Importante</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              La inscripción para prácticas del semestre 2024-1 está abierta hasta el 15 de marzo. 
              Asegúrate de tener todos tus documentos actualizados en el sistema.
            </p>
          </CardContent>
        </Card>

        {/* Documents Section */}
        <Card className="card-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Documentos y Formularios
            </CardTitle>
            <CardDescription>
              Descarga los documentos oficiales necesarios para tu práctica
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {documents.map((doc, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-start gap-3">
                  <FileText className="h-5 w-5 text-muted-foreground mt-1" />
                  <div>
                    <h4 className="font-medium">{doc.title}</h4>
                    <p className="text-sm text-muted-foreground">{doc.description}</p>
                    <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                      <Badge variant="outline">{doc.type}</Badge>
                      <span>{doc.size}</span>
                      <span>Actualizado: {new Date(doc.updated).toLocaleDateString('es-ES')}</span>
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Descargar
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Events Section */}
        <Card className="card-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Eventos y Talleres
            </CardTitle>
            <CardDescription>
              Próximas actividades relacionadas con prácticas profesionales
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {events.map((event, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">{event.title}</h4>
                    <p className="text-sm text-muted-foreground">{event.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(event.date).toLocaleDateString('es-ES')}
                      </div>
                      <span>{event.time}</span>
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Más Info
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <Card className="card-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HelpCircle className="h-5 w-5" />
              Preguntas Frecuentes
            </CardTitle>
            <CardDescription>
              Respuestas a las consultas más comunes sobre prácticas profesionales
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="card-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Contacto Dirección de Prácticas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h4 className="font-medium">Oficina de Prácticas Profesionales</h4>
                <p className="text-muted-foreground">Departamento de Informática</p>
                <p className="text-muted-foreground">Universidad Técnica Federico Santa María</p>
                <p className="text-muted-foreground">Av. España 1680, Valparaíso</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Horario de Atención</h4>
                <p className="text-muted-foreground">Lunes a Viernes: 9:00 - 17:00</p>
                <p className="text-muted-foreground">Teléfono: +56 32 2654000</p>
                <p className="text-muted-foreground">Email: practicas.inf@usm.cl</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Information;