import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/hooks/use-toast";
import { User, GraduationCap, MapPin, Upload } from "lucide-react";

const Profile = () => {
  const [personalData, setPersonalData] = useState({
    nombres: "Juan Carlos",
    apellidos: "González López", 
    rut: "12.345.678-9",
    rol: "201873001",
    sexo: "masculino",
    cv: "JuanCarlosGL_CV.pdf"
  });

  const [universityData, setUniversityData] = useState({
    carrera: "Ingeniería Civil Informática",
    campus: "Casa Central Valparaíso",
    anioIngreso: "2020",
    semestreActual: "7"
  });

  const [contactData, setContactData] = useState({
    email: "juan.gonzalez@sansano.usm.cl",
    telefono: "+56912345678",
    region: "Región de Valparaíso",
    ciudad: "Valparaíso",
    direccion: "Av. España 1680"
  });

  const handleSave = (section: string) => {
    toast({
      title: "Datos actualizados",
      description: `Los datos de ${section} han sido guardados correctamente.`,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold gradient-text">Mi Perfil</h1>
          <p className="text-muted-foreground">Gestiona tu información personal y académica</p>
        </div>

        <Tabs defaultValue="personal" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="personal" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Personal
            </TabsTrigger>
            <TabsTrigger value="university" className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4" />
              Universitarios
            </TabsTrigger>
            <TabsTrigger value="contact" className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Contacto
            </TabsTrigger>
          </TabsList>

          <TabsContent value="personal">
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle>Datos Personales</CardTitle>
                <CardDescription>
                  Información básica de identificación
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nombres">Nombres</Label>
                    <Input
                      id="nombres"
                      value={personalData.nombres}
                      onChange={(e) => setPersonalData({...personalData, nombres: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="apellidos">Apellidos</Label>
                    <Input
                      id="apellidos"
                      value={personalData.apellidos}
                      onChange={(e) => setPersonalData({...personalData, apellidos: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="rut">RUT</Label>
                    <Input
                      id="rut"
                      value={personalData.rut}
                      onChange={(e) => setPersonalData({...personalData, rut: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="rol">Rol USM</Label>
                    <Input
                      id="rol"
                      value={personalData.rol}
                      onChange={(e) => setPersonalData({...personalData, rol: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="sexo">Sexo</Label>
                    <Select value={personalData.sexo} onValueChange={(value) => setPersonalData({...personalData, sexo: value})}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="masculino">Masculino</SelectItem>
                        <SelectItem value="femenino">Femenino</SelectItem>
                        <SelectItem value="otro">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="cv">Curriculum Vitae (CV)</Label>
                  <div className="flex items-center gap-2">
                    <Input
                      id="cv"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          setPersonalData({...personalData, cv: file.name});
                          toast({
                            title: "CV actualizado",
                            description: `Archivo ${file.name} cargado correctamente.`,
                          });
                        }
                      }}
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => document.getElementById('cv')?.click()}
                      className="flex items-center gap-2"
                    >
                      <Upload className="h-4 w-4" />
                      Cargar CV
                    </Button>
                    {personalData.cv && (
                      <span className="text-sm text-muted-foreground">
                        {personalData.cv}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Formatos permitidos: PDF, DOC, DOCX (máx. 5MB)
                  </p>
                </div>
                <Button onClick={() => handleSave("personales")} className="w-full">
                  Guardar Datos Personales
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="university">
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle>Datos Universitarios</CardTitle>
                <CardDescription>
                  Información académica y de carrera
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="carrera">Carrera</Label>
                    <Select value={universityData.carrera} onValueChange={(value) => setUniversityData({...universityData, carrera: value})}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Ingeniería Civil Informática">Ingeniería Civil Informática</SelectItem>
                        <SelectItem value="Ingeniería en Informática">Ingeniería en Informática</SelectItem>
                        <SelectItem value="Licenciatura en Ciencias de la Computación">Licenciatura en Ciencias de la Computación</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="campus">Campus</Label>
                    <Select value={universityData.campus} onValueChange={(value) => setUniversityData({...universityData, campus: value})}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Casa Central Valparaíso">Casa Central Valparaíso</SelectItem>
                        <SelectItem value="San Joaquín Santiago">San Joaquín Santiago</SelectItem>
                        <SelectItem value="Vitacura Santiago">Vitacura Santiago</SelectItem>
                        <SelectItem value="Concepción">Concepción</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="anioIngreso">Año de Ingreso</Label>
                    <Select value={universityData.anioIngreso} onValueChange={(value) => setUniversityData({...universityData, anioIngreso: value})}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2018">2018</SelectItem>
                        <SelectItem value="2019">2019</SelectItem>
                        <SelectItem value="2020">2020</SelectItem>
                        <SelectItem value="2021">2021</SelectItem>
                        <SelectItem value="2022">2022</SelectItem>
                        <SelectItem value="2023">2023</SelectItem>
                        <SelectItem value="2024">2024</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="semestreActual">Semestre Actual</Label>
                    <Select value={universityData.semestreActual} onValueChange={(value) => setUniversityData({...universityData, semestreActual: value})}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1° Semestre</SelectItem>
                        <SelectItem value="2">2° Semestre</SelectItem>
                        <SelectItem value="3">3° Semestre</SelectItem>
                        <SelectItem value="4">4° Semestre</SelectItem>
                        <SelectItem value="5">5° Semestre</SelectItem>
                        <SelectItem value="6">6° Semestre</SelectItem>
                        <SelectItem value="7">7° Semestre</SelectItem>
                        <SelectItem value="8">8° Semestre</SelectItem>
                        <SelectItem value="9">9° Semestre</SelectItem>
                        <SelectItem value="10">10° Semestre</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Button onClick={() => handleSave("universitarios")} className="w-full">
                  Guardar Datos Universitarios
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contact">
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle>Datos de Contacto</CardTitle>
                <CardDescription>
                  Información de contacto y ubicación
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={contactData.email}
                      onChange={(e) => setContactData({...contactData, email: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telefono">Teléfono</Label>
                    <Input
                      id="telefono"
                      value={contactData.telefono}
                      onChange={(e) => setContactData({...contactData, telefono: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="region">Región</Label>
                    <Select value={contactData.region} onValueChange={(value) => setContactData({...contactData, region: value})}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Región de Valparaíso">Región de Valparaíso</SelectItem>
                        <SelectItem value="Región Metropolitana">Región Metropolitana</SelectItem>
                        <SelectItem value="Región del Biobío">Región del Biobío</SelectItem>
                        <SelectItem value="Región de la Araucanía">Región de la Araucanía</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ciudad">Ciudad</Label>
                    <Input
                      id="ciudad"
                      value={contactData.ciudad}
                      onChange={(e) => setContactData({...contactData, ciudad: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="direccion">Dirección</Label>
                    <Input
                      id="direccion"
                      value={contactData.direccion}
                      onChange={(e) => setContactData({...contactData, direccion: e.target.value})}
                    />
                  </div>
                </div>
                <Button onClick={() => handleSave("contacto")} className="w-full">
                  Guardar Datos de Contacto
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;