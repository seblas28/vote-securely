import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CandidateCard } from "@/components/CandidateCard";
import { VoteTimer } from "@/components/VoteTimer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { toast } from "sonner";

const Votacion = () => {
  const navigate = useNavigate();
  const [selectedPresident, setSelectedPresident] = useState<string | null>(null);
  const [selectedMayor, setSelectedMayor] = useState<string | null>(null);
  const [selectedDeputy, setSelectedDeputy] = useState<string | null>(null);
  const [showTimeoutDialog, setShowTimeoutDialog] = useState(false);

  const presidents = [
    {
      id: "p1",
      name: "María González",
      party: "Partido del Progreso",
      proposals: "Enfoque en educación universal gratuita, reforma del sistema de salud y creación de empleos en tecnología verde.",
      imageUrl: "/placeholder.svg",
    },
    {
      id: "p2",
      name: "Carlos Ramírez",
      party: "Alianza Nacional",
      proposals: "Reducción de impuestos para pequeñas empresas, fortalecimiento de la seguridad ciudadana y apoyo al sector agrícola.",
      imageUrl: "/placeholder.svg",
    },
  ];

  const mayors = [
    {
      id: "m1",
      name: "Ana Martínez",
      party: "Movimiento Ciudadano",
      proposals: "Mejora del transporte público, construcción de parques comunitarios y programa de vivienda accesible.",
      imageUrl: "/placeholder.svg",
    },
    {
      id: "m2",
      name: "José López",
      party: "Partido Verde Local",
      proposals: "Reciclaje obligatorio, incentivos para energía solar y expansión de ciclovías en toda la ciudad.",
      imageUrl: "/placeholder.svg",
    },
  ];

  const deputies = [
    {
      id: "d1",
      name: "Laura Fernández",
      party: "Partido Progresista",
      proposals: "Leyes de protección al consumidor, transparencia gubernamental y derechos laborales modernos.",
      imageUrl: "/placeholder.svg",
    },
    {
      id: "d2",
      name: "Roberto Silva",
      party: "Unión Democrática",
      proposals: "Apoyo a la agricultura familiar, reforma educativa y mejora de infraestructura rural.",
      imageUrl: "/placeholder.svg",
    },
  ];

  const handleTimeUp = () => {
    setShowTimeoutDialog(true);
  };

  const handleSubmitVote = () => {
    if (!selectedPresident || !selectedMayor || !selectedDeputy) {
      toast.error("Por favor selecciona un candidato en cada categoría");
      return;
    }

    toast.success("¡Voto registrado exitosamente!");
    setTimeout(() => {
      navigate("/confirmacion");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto max-w-7xl px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">Proceso de Votación</h1>
            <p className="text-muted-foreground">
              Selecciona un candidato en cada categoría
            </p>
          </div>
          <VoteTimer durationMinutes={10} onTimeUp={handleTimeUp} />
        </div>

        {/* Voting Interface */}
        <Tabs defaultValue="presidente" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="presidente">Presidente</TabsTrigger>
            <TabsTrigger value="alcalde">Alcalde</TabsTrigger>
            <TabsTrigger value="diputados">Diputados</TabsTrigger>
          </TabsList>

          <TabsContent value="presidente" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {presidents.map((candidate) => (
                <CandidateCard
                  key={candidate.id}
                  name={candidate.name}
                  party={candidate.party}
                  proposals={candidate.proposals}
                  imageUrl={candidate.imageUrl}
                  isSelected={selectedPresident === candidate.id}
                  onSelect={() => setSelectedPresident(candidate.id)}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="alcalde" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {mayors.map((candidate) => (
                <CandidateCard
                  key={candidate.id}
                  name={candidate.name}
                  party={candidate.party}
                  proposals={candidate.proposals}
                  imageUrl={candidate.imageUrl}
                  isSelected={selectedMayor === candidate.id}
                  onSelect={() => setSelectedMayor(candidate.id)}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="diputados" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {deputies.map((candidate) => (
                <CandidateCard
                  key={candidate.id}
                  name={candidate.name}
                  party={candidate.party}
                  proposals={candidate.proposals}
                  imageUrl={candidate.imageUrl}
                  isSelected={selectedDeputy === candidate.id}
                  onSelect={() => setSelectedDeputy(candidate.id)}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Submit Button */}
        <div className="mt-8 flex justify-center">
          <Button
            size="lg"
            onClick={handleSubmitVote}
            className="px-12"
          >
            Confirmar Voto
          </Button>
        </div>
      </div>

      {/* Timeout Dialog */}
      <AlertDialog open={showTimeoutDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Tiempo Agotado</AlertDialogTitle>
            <AlertDialogDescription>
              El tiempo para votar ha finalizado. Por favor intenta nuevamente más tarde.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => navigate("/")}>
              Volver al Inicio
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Votacion;
