import { Icons } from "@/components/icons/Icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  buttonVariants,
} from "@/components/ui";
import Link from "next/link";

import React from "react";

export const NavigationBanner = () => {
  return (
    <div>
      <Card className="bg-muted text-muted-foreground bg-opacity-90 text-center px-14 py-6">
        <CardHeader>
          <CardTitle>Welcome to Fridgefy</CardTitle>
          <CardDescription>
            Fridgefy helps you to organize your fridge with your recipes.
          </CardDescription>
          <CardDescription>Try now!</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <div>
            <Link href={"/shopping-cart"}>
              <div
                className={buttonVariants({
                  size: "lg",
                  variant: "outline",
                })}
              >
                <span>Go to shopping cart</span>
                <Icons.shoppingCart className="h-5 w-5" />
              </div>
            </Link>
          </div>
          <div>
            <Link href={"/recipes"}>
              <div
                className={buttonVariants({
                  size: "lg",
                  variant: "outline",
                })}
              >
                <span>Check recipes</span>
                <Icons.recipe className="h-5 w-5" />
              </div>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
