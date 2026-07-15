"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface PricingPlan {
  name: string;
  price: number;
  description: string;
  features: string[];
  highlighted?: boolean;
  paypalLink: string;
}

const plans: PricingPlan[] = [
  {
    name: "Basic",
    price: 35,
    description: "Essential vehicle information for your needs",
    features: [
      "VIN / License Plate Lookup",
      "Ownership Records",
      "Title Records",
      "Basic Vehicle Specifications",
      "Email Delivery",
      "24-Hour Processing",
    ],
    paypalLink: "https://buy.stripe.com/00w7sL6hx0Nxbkp5k6bo403",
  },
  {
    name: "Standard",
    price: 45,
    description: "Comprehensive vehicle data with detailed insights",
    features: [
      "Everything in Basic",
      "Accident Records",
      "Mileage Records Analysis",
      "Recall Information",
      "Market Value Estimate",
      "Priority Processing",
    ],
    highlighted: true,
    paypalLink: "https://buy.stripe.com/fZu7sL5dtao7gEJ3bYbo401",
  },
  {
    name: "Premium",
    price: 55,
    description: "Complete vehicle analysis with premium support",
    features: [
      "Everything in Standard",
      "Full Vehicle Specifications",
      "Ownership Timeline",
      "Enhanced Accident Analysis",
      "Priority Email Support",
      "Instant Processing",
    ],
    paypalLink: "https://buy.stripe.com/00w9ATdJZgMvaglcMybo402",
  },
];

const vehicleTypes = [
  "Car",
  "SUV",
  "Truck",
  "Motorcycle",
  "ATV",
  "RV",
  "Caravan",
  "Campervan",
  "Boat",
  "Van",
  "Trailer",
  "Fifth Wheel",
  "Other",
];

export default function PricingCard() {
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedPlan) return;

    // Send order in background and navigate current tab to Stripe
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const data = {
      clientName: formData.get("clientName"),
      email: formData.get("email"),
      vinPlate: formData.get("vinPlate"),
      vehicleType: formData.get("vehicleType"),
      plan: selectedPlan.name,
      price: selectedPlan.price,
    };

    try {
      const payload = JSON.stringify(data);

      if (typeof navigator !== "undefined" && "sendBeacon" in navigator) {
        const blob = new Blob([payload], { type: "application/json" });
        navigator.sendBeacon("/api/send-order", blob);
      } else {
        // Fallback: non-blocking fetch with keepalive
        fetch("/api/send-order", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: payload,
          keepalive: true,
        }).catch(() => {});
      }

      setSelectedPlan(null);
      (e.target as HTMLFormElement).reset();

      // Navigate current tab to Stripe checkout
      window.location.href = selectedPlan.paypalLink;
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit order. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={cn(
              "relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2",
              plan.highlighted
                ? "bg-gradient-to-b from-purple-600 to-purple-800 text-white shadow-2xl shadow-purple-500/30 scale-105 z-10"
                : "bg-white border-2 border-gray-100 hover:border-purple-200 shadow-lg hover:shadow-xl"
            )}
          >
            {plan.highlighted && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <Badge className="bg-purple-500 text-white px-4 py-1.5 shadow-lg">
                  Most Popular
                </Badge>
              </div>
            )}

            <div className="text-center">
              <h3
                className={cn(
                  "text-lg md:text-xl font-bold",
                  plan.highlighted ? "text-white" : "text-gray-900"
                )}
              >
                {plan.name}
              </h3>
              <div className="mt-4 flex items-baseline justify-center gap-1">
                <span
                  className={cn(
                    "text-3xl md:text-5xl font-bold",
                    plan.highlighted ? "text-white" : "text-purple-700"
                  )}
                >
                  £{plan.price}
                </span>
              </div>
              <p
                className={cn(
                  "mt-2 text-xs md:text-sm",
                  plan.highlighted ? "text-purple-100" : "text-gray-500"
                )}
              >
                {plan.description}
              </p>
            </div>

            <ul className="mt-8 space-y-4">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <div
                    className={cn(
                      "flex-shrink-0 rounded-full p-1",
                      plan.highlighted ? "bg-purple-400" : "bg-purple-100"
                    )}
                  >
                    <Check
                      className={cn(
                        "h-4 w-4",
                        plan.highlighted ? "text-white" : "text-purple-700"
                      )}
                    />
                  </div>
                  <span
                    className={cn(
                      "text-xs md:text-sm",
                      plan.highlighted ? "text-purple-100" : "text-gray-600"
                    )}
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <Button
              onClick={() => setSelectedPlan(plan)}
              className={cn(
                "w-full mt-8 py-6 text-base font-semibold transition-all",
                plan.highlighted
                  ? "bg-white text-purple-700 hover:bg-purple-50"
                  : "bg-gradient-to-r from-purple-600 to-purple-800 text-white hover:from-purple-700 hover:to-purple-900"
              )}
            >
              Select Plan
            </Button>
          </div>
        ))}
      </div>

      <Dialog open={!!selectedPlan} onOpenChange={() => setSelectedPlan(null)}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-xl md:text-2xl">Complete Your Order</DialogTitle>
            <DialogDescription>
              {selectedPlan && (
                <span>
                  You selected the <strong>{selectedPlan.name}</strong> plan at{" "}
                  <strong className="text-purple-700">£{selectedPlan.price}</strong>
                </span>
              )}
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            <div className="space-y-2">
              <Label htmlFor="clientName">Client Name</Label>
              <Input
                id="clientName"
                name="clientName"
                type="text"
                placeholder="Enter your full name"
                required
                className="border-purple-200 focus:border-purple-500 focus:ring-purple-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                required
                className="border-purple-200 focus:border-purple-500 focus:ring-purple-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="vinPlate">VIN / Plate Number</Label>
              <Input
                id="vinPlate"
                name="vinPlate"
                type="text"
                placeholder="Enter VIN or License Plate Number"
                required
                className="border-purple-200 focus:border-purple-500 focus:ring-purple-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="vehicleType">Vehicle Type</Label>
              <Select name="vehicleType" required>
                <SelectTrigger className="border-purple-200 focus:border-purple-500 focus:ring-purple-500">
                  <SelectValue placeholder="Select vehicle type" />
                </SelectTrigger>
                <SelectContent>
                  {vehicleTypes.map((type) => (
                    <SelectItem key={type} value={type.toLowerCase()}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-6 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-base font-semibold"
            >
              {isSubmitting ? "Processing..." : "Continue to Payment"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
