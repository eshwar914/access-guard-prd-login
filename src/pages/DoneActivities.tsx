import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Calendar, Trophy, Undo } from "lucide-react";

interface CompletedTask {
  id: string;
  title: string;
  completedAt: Date;
  category: string;
}

const DoneActivities = () => {
  const completedTasks: CompletedTask[] = [
    {
      id: "1",
      title: "Complete project documentation",
      completedAt: new Date("2024-01-15"),
      category: "Work"
    },
    {
      id: "2",
      title: "Review code changes",
      completedAt: new Date("2024-01-14"),
      category: "Development"
    },
    {
      id: "3",
      title: "Update team on progress",
      completedAt: new Date("2024-01-13"),
      category: "Communication"
    },
    {
      id: "4",
      title: "Organize workspace",
      completedAt: new Date("2024-01-12"),
      category: "Personal"
    },
    {
      id: "5",
      title: "Plan next sprint",
      completedAt: new Date("2024-01-11"),
      category: "Planning"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Work: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
      Development: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
      Communication: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
      Personal: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
      Planning: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300"
    };
    return colors[category] || "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-foreground">Done Activities</h1>
        <div className="flex items-center gap-2">
          <Trophy className="h-5 w-5 text-primary" />
          <span className="text-sm text-muted-foreground">
            {completedTasks.length} tasks completed
          </span>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 bg-primary rounded-full flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">{completedTasks.length}</p>
                <p className="text-sm text-muted-foreground">Total Completed</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 bg-green-500 rounded-full flex items-center justify-center">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-green-600">
                  {completedTasks.filter(task => 
                    task.completedAt >= new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
                  ).length}
                </p>
                <p className="text-sm text-muted-foreground">This Week</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 bg-orange-500 rounded-full flex items-center justify-center">
                <Trophy className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-orange-600">91%</p>
                <p className="text-sm text-muted-foreground">Success Rate</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Completed Tasks List */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-primary" />
            Completed Tasks
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {completedTasks.length === 0 ? (
              <div className="text-center py-8">
                <CheckCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">No completed tasks yet.</p>
              </div>
            ) : (
              completedTasks.map((task) => (
                <div
                  key={task.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors"
                >
                  <div className="flex items-center gap-3 flex-1">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <div className="flex-1">
                      <h3 className="font-medium text-foreground">{task.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        Completed on {task.completedAt.toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge className={getCategoryColor(task.category)}>
                      {task.category}
                    </Badge>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Undo className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DoneActivities;