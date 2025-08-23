import { Children, cloneElement, createContext, useContext, useEffect, useState } from "react";
import * as Portal from "@radix-ui/react-portal"

import { cn } from "@/lib/utils"

const DialogStackContext = createContext({
  activeIndex: 0,
  setActiveIndex: () => {},
  totalDialogs: 0,
  setTotalDialogs: () => {},
  isOpen: false,
  setIsOpen: () => {},
  clickable: false,
})

export const DialogStack = ({
  children,
  className,
  open = false,
  onOpenChange,
  clickable = false,
  ...props
}) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(open)

  useEffect(() => {
    onOpenChange?.(isOpen)
  }, [isOpen, onOpenChange])

  // Prevent body scrolling when dialog is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    // Cleanup function to restore body scroll when component unmounts
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    (<DialogStackContext.Provider
      value={{
        activeIndex,
        setActiveIndex,
        totalDialogs: 0,
        setTotalDialogs: () => {},
        isOpen,
        setIsOpen,
        clickable,
      }}>
      <div className={className} {...props}>
        {children}
      </div>
    </DialogStackContext.Provider>)
  );
}

export const DialogStackTrigger = ({
  children,
  className,
  onClick,
  asChild,
  ...props
}) => {
  const context = useContext(DialogStackContext)

  if (!context) {
    throw new Error("DialogStackTrigger must be used within a DialogStack")
  }

  const handleClick = (e) => {
    context.setIsOpen(true)
    onClick?.(e)
  }

  if (asChild && children) {
    return cloneElement(children, {
      onClick: handleClick,
      className: cn(className, (children).props.className),
      ...props,
    });
  }

  return (
    (<button
      onClick={handleClick}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium",
        "ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2",
        "focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        "bg-primary text-primary-foreground hover:bg-primary/90",
        "h-10 px-4 py-2",
        className
      )}
      {...props}>
      {children}
    </button>)
  );
}

export const DialogStackOverlay = ({
  className,
  ...props
}) => {
  const context = useContext(DialogStackContext)

  if (!context) {
    throw new Error("DialogStackOverlay must be used within a DialogStack")
  }

  if (!context.isOpen) {
    return null
  }

  return (
    // biome-ignore lint/nursery/noStaticElementInteractions: "This is a clickable overlay"
    (<div
      className={cn(
        "fixed inset-0 z-50  ",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className
      )}
      onClick={() => context.setIsOpen(false)}
      {...props} />)
  );
}

export const DialogStackBody = ({
  children,
  className,
  ...props
}) => {
  const context = useContext(DialogStackContext)
  const [totalDialogs, setTotalDialogs] = useState(Children.count(children))

  if (!context) {
    throw new Error("DialogStackBody must be used within a DialogStack")
  }

  if (!context.isOpen) {
    return null
  }

  return (
    (<DialogStackContext.Provider
      value={{
        ...context,
        totalDialogs,
        setTotalDialogs,
      }}>
      <Portal.Root>
        <div
          className={cn(
            "pointer-events-none fixed inset-0 z-50 mx-auto flex w-full max-w-lg flex-col items-center justify-center",
            className
          )}
          {...props}>
          <div
            className="pointer-events-auto relative flex w-full flex-col items-center justify-center">
            {Children.map(children, (child, index) =>
              cloneElement(child, { index }))}
          </div>
        </div>
      </Portal.Root>
    </DialogStackContext.Provider>)
  );
}

export const DialogStackContent = ({
  children,
  className,
  index = 0,
  offset = 10,
  ...props
}) => {
  const context = useContext(DialogStackContext)

  if (!context) {
    throw new Error("DialogStackContent must be used within a DialogStack")
  }

  if (!context.isOpen) {
    return null
  }

  const handleClick = () => {
    if (context.clickable && context.activeIndex > index) {
      context.setActiveIndex(index ?? 0)
    }
  }

  const distanceFromActive = index - context.activeIndex
  const translateY =
    distanceFromActive < 0
      ? `-${Math.abs(distanceFromActive) * offset}px`
      : `${Math.abs(distanceFromActive) * offset}px`

  return (
    // biome-ignore lint/nursery/noStaticElementInteractions: "This is a clickable dialog"
    (<div
      onClick={handleClick}
      className={cn(
        "size-full rounded-[22px] border-2 border-black/5 dark:border-white/20 bg-background p-2 shadow-lg transition-all duration-300 ",
        className
      )}
      style={{
        top: 0,
        transform: `translateY(${translateY})`,
        width: `calc(100% - ${Math.abs(distanceFromActive) * 10}px)`,
        zIndex: 50 - Math.abs(context.activeIndex - (index ?? 0)),
        position: distanceFromActive ? "absolute" : "relative",
        opacity: distanceFromActive > 0 ? 0 : 1,
        cursor:
          context.clickable && context.activeIndex > index
            ? "pointer"
            : "default",
      }}
      {...props}>
      <div
        className={cn(
          "size-full rounded-[14px] border border-black/5 bg-neutral-800/10 dark:bg-white/5 p-4 shadow-sm transition-all duration-300",
          context.activeIndex !== index &&
            "pointer-events-none select-none opacity-0"
        )}>
        {children}
      </div>
    </div>)
  );
}

export const DialogStackHeader = ({
  className,
  ...props
}) => (
  <div
    className={cn("flex flex-col text-center sm:text-left", className)}
    {...props} />
)

export const DialogStackFooter = ({
  children,
  className,
  ...props
}) => (
  <div
    className={cn("flex items-center justify-end space-x-2 pt-4", className)}
    {...props}>
    {children}
  </div>
)

export const DialogStackNext = ({
  children,
  className,
  asChild,
  ...props
}) => {
  const context = useContext(DialogStackContext)

  if (!context) {
    throw new Error("DialogStackNext must be used within a DialogStack")
  }

  const handleNext = () => {
    if (context.activeIndex < context.totalDialogs - 1) {
      context.setActiveIndex(context.activeIndex + 1)
    }
  }

  if (asChild && children) {
    return cloneElement(children, {
      onClick: handleNext,
      className: cn(className, (children).props.className),
      ...props,
    });
  }

  return (
    (<button
      type="button"
      onClick={handleNext}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      disabled={context.activeIndex >= context.totalDialogs - 1}
      {...props}>
      {children || "Next"}
    </button>)
  );
}

export const DialogStackPrevious = ({
  children,
  className,
  asChild,
  ...props
}) => {
  const context = useContext(DialogStackContext)

  if (!context) {
    throw new Error("DialogStackPrevious must be used within a DialogStack")
  }

  const handlePrevious = () => {
    if (context.activeIndex > 0) {
      context.setActiveIndex(context.activeIndex - 1)
    }
  }

  if (asChild && children) {
    return cloneElement(children, {
      onClick: handlePrevious,
      className: cn(className, (children).props.className),
      ...props,
    });
  }

  return (
    (<button
      type="button"
      onClick={handlePrevious}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      disabled={context.activeIndex <= 0}
      {...props}>
      {children || "Previous"}
    </button>)
  );
}
