import { useRef, useState } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { X, Check, User } from "lucide-react";
import type { UploadState } from "../../type";


const ProfileUpdateAlert = () => {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<UploadState>("empty");
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    setState("preview");
  };

  const handleSave = () => {
    setState("saved");
  };

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => {
      setState("empty");
      setPreviewUrl(null);
    }, 300);
  };

  return (
    <>
      <Button
        className="w-full bg-primary-Blue hover:bg-primary-Blue/80 text-white"
        onClick={() => setOpen(true)}
      >
        My Profile
      </Button>

      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent className="max-w-sm p-6">
          <AlertDialogHeader className="flex flex-row items-center justify-between mb-4">
            <AlertDialogTitle className="text-base font-semibold">
              {state === "saved" ? "Profile Picture Taken" : "Upload your Profile Picture"}
            </AlertDialogTitle>
            <button
              onClick={handleClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={18} />
            </button>
          </AlertDialogHeader>

          {/* Image Area */}
          <div
            className={`relative mx-auto rounded-xl overflow-hidden flex items-center justify-center bg-gray-900 
              ${state === "empty" ? "w-40 h-40 cursor-pointer" : "w-full h-64"}`}
            onClick={() => state === "empty" && fileInputRef.current?.click()}
          >
            {state === "empty" && (
              <div className="flex flex-col items-center gap-2 text-gray-400">
                <User size={48} strokeWidth={1} />
                <span className="text-xs text-center px-4">Tap here to Select Photo</span>
              </div>
            )}

            {(state === "preview" || state === "saved") && previewUrl && (
              <img
                src={previewUrl}
                alt="Profile preview"
                className="w-full h-full object-cover"
              />
            )}

            {/* Saved overlay */}
            {state === "saved" && (
              <div className="absolute inset-0 bg-black/20 flex items-end justify-center p-3">
                <div className="bg-green-500 rounded-full p-1.5">
                  <Check size={60} className="text-white" strokeWidth={3} />
                </div>
              </div>
            )}
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />

          <div className="mt-4">
            {state === "preview" && (
              <Button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                onClick={handleSave}
              >
                Save Photo
              </Button>
            )}

            {state === "saved" && (
              <Button
                variant="outline"
                className="w-full"
                onClick={handleClose}
              >
                Done
              </Button>
            )}
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default ProfileUpdateAlert;