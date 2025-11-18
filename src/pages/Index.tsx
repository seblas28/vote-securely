import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Vote, Clock, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-institutional py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center text-white space-y-6">
            <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-4">
              <Vote className="h-12 w-12" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold">
              Sistema Electoral Digital
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Plataforma segura y transparente para ejercer tu derecho al voto
            </p>
            <Button
              size="lg"
              onClick={() => navigate("/verificacion")}
              className="bg-white text-institutional hover:bg-white/90 text-lg px-8 py-6 mt-4"
            >
              Iniciar Proceso de Votación
            </Button>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Seguridad y Transparencia
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-card">
              <CardHeader>
                <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-lg">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Verificación de Identidad</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Sistema de verificación mediante DNI, nombre completo y fecha de nacimiento.
                  Cada votante es validado antes de acceder al sistema.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-lg">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Tiempo Controlado</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  El proceso de votación tiene un límite de tiempo para garantizar
                  la seguridad y evitar manipulaciones.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-lg">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Un Voto por Persona</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  El sistema garantiza que cada ciudadano pueda votar una sola vez,
                  preservando la integridad del proceso electoral.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Voting Categories */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Categorías de Votación
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl">Presidente</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Elige al candidato que liderará el país durante los próximos años.
                  Conoce sus propuestas de gobierno y planes de acción.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl">Alcalde</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Selecciona al representante de tu municipio. Revisa los planes
                  de desarrollo local y mejoras comunitarias.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl">Diputados</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Vota por los representantes legislativos que defenderán tus
                  intereses en el congreso.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Vote */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Cómo Votar
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Verificación de Identidad</h3>
                <p className="text-muted-foreground">
                  Ingresa tu número de DNI, nombre completo y fecha de nacimiento para verificar tu elegibilidad.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Revisa a los Candidatos</h3>
                <p className="text-muted-foreground">
                  Lee las propuestas de cada candidato en las diferentes categorías: Presidente, Alcalde y Diputados.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Emite tu Voto</h3>
                <p className="text-muted-foreground">
                  Selecciona tus candidatos preferidos antes de que termine el tiempo límite y confirma tu voto.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Confirmación</h3>
                <p className="text-muted-foreground">
                  Recibe la confirmación de que tu voto ha sido registrado de forma segura y anónima.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button
              size="lg"
              onClick={() => navigate("/verificacion")}
              className="text-lg px-8 py-6"
            >
              Comenzar a Votar Ahora
            </Button>
          </div>
        </div>
      </section>

      {/* Admin Access */}
      <section className="py-8 px-4 border-t border-border/40">
        <div className="container mx-auto max-w-6xl text-center">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/admin/login")}
            className="text-muted-foreground hover:text-foreground"
          >
            Acceso Administrativo
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-sm">
            © 2024 Sistema Electoral Digital. Todos los derechos reservados.
          </p>
          <p className="text-xs mt-2 opacity-80">
            Plataforma segura certificada para procesos electorales democráticos
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
