import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Confirmacion = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <Card className="w-full max-w-md shadow-elevated">
        <CardHeader className="text-center pb-4">
          <div className="mx-auto mb-4 inline-flex p-4 bg-accent/10 rounded-full">
            <CheckCircle2 className="h-16 w-16 text-accent" />
          </div>
          <CardTitle className="text-3xl">¡Voto Registrado!</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-center">
          <p className="text-muted-foreground text-lg">
            Tu voto ha sido registrado de forma segura y anónima.
          </p>
          <p className="text-sm text-muted-foreground">
            Gracias por participar en el proceso democrático. Tu voto es importante
            para el futuro de nuestro país.
          </p>
          <div className="pt-4">
            <Button
              size="lg"
              onClick={() => navigate("/")}
              className="w-full"
            >
              Volver al Inicio
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Confirmacion;
