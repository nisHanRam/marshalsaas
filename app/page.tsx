import { Button } from "@/components/ui/button";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const { isAuthenticated } = getKindeServerSession();

  if (await isAuthenticated()) {
    redirect("/dashboard");
  }

  return (
    <section className="flex items-center justify-center bg-background h-[90vh]">
      <div className="relative items-center w-full px-5 md:px-12 lg:px-16 py-12 mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto">
          <div>
            <span className="bg-secondary w-auto px-6 py-3 rounded-full">
              <span className="text-sm text-primary font-medium">
                SORT YOUR NOTES EASILY
              </span>
            </span>
            <h1 className="font-extrabold mt-8 text-3xl tracking-tight lg:text-6xl">
              Create Notes with Ease
            </h1>
            <p className="max-w-xl mx-auto mt-8 text-base lg:text-xl text-secondary-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
              exercitationem impedit error, tempora quae similique nulla.
            </p>
            <div className="flex justify-center max-w-sm mx-auto mt-10">
              <RegisterLink>
                <Button size="lg" className="w-full">
                  Sign Up for Free
                </Button>
              </RegisterLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
