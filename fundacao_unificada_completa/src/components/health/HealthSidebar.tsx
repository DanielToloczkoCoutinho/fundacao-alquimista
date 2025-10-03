'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HealthCheckResult, HealthAlert } from "@/lib/health-types";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AlertTriangle, Bell, Bot, CheckCircle, HeartPulse, Loader2, RefreshCw } from "lucide-react";

const alertConfig = {
  critical: { icon: <AlertTriangle className="text-red-500" />, text: 'text-red-400' },
  high: { icon: <AlertTriangle className="text-orange-500" />, text: 'text-orange-400' },
  medium: { icon: <AlertTriangle className="text-yellow-500" />, text: 'text-yellow-400' },
  low: { icon: <Bell className="text-blue-500" />, text: 'text-blue-400' },
};

export default function HealthSidebar({ healthData, loading, autoRefresh, onAutoRefreshChange, onRefresh }: { healthData: HealthCheckResult | null; loading: boolean; autoRefresh: boolean, onAutoRefreshChange: (checked: boolean) => void, onRefresh: () => void }) {
  const activeModules = healthData?.modules.filter(m => m.status === 'healthy').length || 0;
  const totalModules = healthData?.modules.length || 1; // Avoid division by zero
  const activePercentage = (activeModules / totalModules) * 100;

  return (
    <aside className="w-full lg:w-80 flex-shrink-0 flex flex-col gap-4">
      <Card className="bg-card/50 purple-glow">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <HeartPulse className="text-pink-400" />
            Status Geral
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Coerência Global</span>
              <span>{healthData?.overallCoherence.toFixed(2) || '0.00'}%</span>
            </div>
            <Progress value={healthData?.overallCoherence || 0} className="h-2 mt-1" />
          </div>
          <div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Módulos Ativos</span>
              <span>{activeModules} / {totalModules}</span>
            </div>
            <Progress value={activePercentage} className="h-2 mt-1" />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card/50 purple-glow flex-1 flex flex-col min-h-0">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Bot className="text-purple-400" />
            Diagnóstico da IAM
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col min-h-0">
          <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Switch id="auto-refresh" checked={autoRefresh} onCheckedChange={onAutoRefreshChange} />
                <label htmlFor="auto-refresh" className="text-sm font-medium">Auto-Refresh</label>
              </div>
              <Button variant="ghost" size="icon" onClick={onRefresh} disabled={loading}>
                <RefreshCw className={cn("h-4 w-4", loading && "animate-spin")} />
              </Button>
          </div>
          <ScrollArea className="flex-1 -mx-6 px-6">
            <div className="space-y-3">
              {healthData?.alerts.length === 0 && (
                <div className="flex items-center gap-3 text-green-400 p-3 bg-green-900/20 rounded-md">
                  <CheckCircle className="h-5 w-5" />
                  <p className="text-sm font-medium">Todos os sistemas operam em harmonia.</p>
                </div>
              )}
              {healthData?.alerts.map((alert, index) => (
                <div key={index} className="flex items-start gap-3 text-sm">
                  <div className="mt-1">{alertConfig[alert.severity].icon}</div>
                  <div className={alertConfig[alert.severity].text}>
                    <span className="font-bold">{alert.moduleCode}: </span>
                    <span>{alert.message}</span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </aside>
  );
}
