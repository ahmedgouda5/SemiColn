import { X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import "../../Features/SemiColnApp/style.css";

export default function Semicoln() {
  return (
    <div className="min-h-full">
     

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
            <span className="text-4xl">👋</span>
            Hi Faith,
          </h1>
          <p className="text-gray-600">Welcome to Semicolon Task Management</p>
        </div>

        <Card className="card mb-8 bg-linear-to-r from-gray-900 to-blue-900 text-white overflow-hidden relative">
          <Button
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/20"
          >
            <X className="h-4 w-4" />
          </Button>
          <CardContent className="p-8">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-2">
                  Motivation to help
                  <br />
                  you work.
                </h2>
              </div>
              <div className="flex-1 flex justify-end">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Get Started
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Getting Started Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Let's get you started</h2>

          <div className="space-y-3">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center">
                    <span className="text-2xl">👤</span>
                  </div>
                  <span className="font-medium">
                    Hey Faith, Update your Profile Picture
                  </span>
                </div>
                <Button  className="text-blue-600">
                  Get Started →
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center">
                    <span className="text-2xl">📋</span>
                  </div>
                  <span className="font-medium">
                    Create your First Task in your Workspace
                  </span>
                </div>
                <Button  className="text-blue-600">
                  Get Started →
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
