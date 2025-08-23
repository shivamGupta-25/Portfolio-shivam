import React from 'react'
import { DialogStack, DialogStackTrigger, DialogStackOverlay, DialogStackBody, DialogStackContent, DialogStackHeader, DialogStackFooter, DialogStackNext, DialogStackPrevious, } 
from '@/components/ui/stacked-dialog.jsx'
import { Button } from '@/components/ui/button'
import { Award } from 'lucide-react'
import { proofOfWorkData } from '@/Data/Data'

const ProofOfWork = () => {
  const proofOfWork = proofOfWorkData;

  return (
    <DialogStack>
      <DialogStackTrigger asChild>
        <Button 
          size="lg" 
          variant="default"
          className="gap-2 text-sm sm:text-base cursor-pointer"
        >
          <Award className="h-4 w-4" />
          Proof of Work
        </Button>
      </DialogStackTrigger>
      <DialogStackOverlay className="bg-background/80 backdrop-blur-sm" />
      <DialogStackBody>
        {proofOfWork.map((cert, index) => (
          <DialogStackContent key={cert.id} className="font-sans">
            <DialogStackHeader>
              <h3 className="text-md font-medium text-foreground">{cert.title}</h3>
              <p className="text-sm text-muted-foreground">
                {index === 0 ? "Tap Next to view the next certificate." : 
                 index === proofOfWork.length - 1 ? "Click outside the dialog to close." : 
                 "Use Previous to go back or Next to continue."}
              </p>
            </DialogStackHeader>
            <div className="mt-4">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full max-h-[60vh] object-contain rounded-md border border-border"
                loading="lazy"
              />
              <div className="mt-3 flex items-center justify-between gap-3">
                <p className="text-sm text-muted-foreground flex-1">
                  {cert.description}
                </p>
                <div className="flex gap-2">
                  {index > 0 && (
                    <DialogStackPrevious className="rounded-md bg-secondary hover:bg-secondary/80 text-secondary-foreground px-3 py-2 text-xs">
                      Previous
                    </DialogStackPrevious>
                  )}
                  {index < proofOfWork.length - 1 && (
                    <DialogStackNext className="rounded-md bg-primary hover:bg-primary/90 text-primary-foreground px-3 py-2 text-xs">
                      Next
                    </DialogStackNext>
                  )}
                </div>
              </div>
            </div>
            <DialogStackFooter>
            </DialogStackFooter>
          </DialogStackContent>
        ))}
      </DialogStackBody>
    </DialogStack>
  )
}

export default ProofOfWork