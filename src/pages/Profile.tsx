import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Mail, Calendar, Edit } from "lucide-react";

const Profile = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-foreground">My Profile</h1>
        <Button className="bg-primary hover:bg-primary/90">
          <Edit className="h-4 w-4 mr-2" />
          Edit Profile
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Profile Info */}
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback className="bg-primary text-primary-foreground text-xl">
                  JD
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-xl font-semibold">John Doe</h3>
                <p className="text-muted-foreground">Productivity Enthusiast</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" value="John Doe" readOnly />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value="john.doe@example.com" readOnly />
              </div>
              <div>
                <Label htmlFor="joined">Member Since</Label>
                <Input id="joined" value="January 2024" readOnly />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Statistics */}
        <Card>
          <CardHeader>
            <CardTitle>Your Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="flex items-center justify-between p-4 bg-accent rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">Total Tasks</p>
                    <p className="text-sm text-muted-foreground">All time</p>
                  </div>
                </div>
                <span className="text-2xl font-bold text-primary">156</span>
              </div>

              <div className="flex items-center justify-between p-4 bg-accent rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-green-500 rounded-full flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Completed</p>
                    <p className="text-sm text-muted-foreground">Tasks finished</p>
                  </div>
                </div>
                <span className="text-2xl font-bold text-green-600">142</span>
              </div>

              <div className="flex items-center justify-between p-4 bg-accent rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-orange-500 rounded-full flex items-center justify-center">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Pending</p>
                    <p className="text-sm text-muted-foreground">Tasks remaining</p>
                  </div>
                </div>
                <span className="text-2xl font-bold text-orange-600">14</span>
              </div>

              <div className="mt-4 p-4 bg-primary/10 rounded-lg">
                <p className="text-center text-primary font-medium">
                  Completion Rate: 91%
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;