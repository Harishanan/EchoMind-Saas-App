import CompanionForm from "@/components/CompanionForm";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { newCompanionPermissions } from "@/lib/actions/companion.actions";
import Image from "next/image";
import Link from "next/link";

const NewCompanion = async () => {
    const { userId } = await auth();
    if (!userId) redirect('/sign-in');

    const canCreateCompanion = await newCompanionPermissions();

    return (
        <main className="flex items-center justify-center min-h-screen px-4 py-8 bg-gray-50">
            <section className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8 space-y-6">
                {canCreateCompanion ? (
                    <>
                        <h1 className="text-3xl font-bold text-gray-800">Companion Builder</h1>
                        <CompanionForm />
                    </>
                ) : (
                    <div className="flex flex-col items-center text-center space-y-4">
                        <Image
                            src="/images/limit.svg"
                            alt="Companion limit reached"
                            width={360}
                            height={230}
                            className="mx-auto"
                        />
                        <div className="inline-block bg-orange-100 text-orange-700 font-semibold px-4 py-1 rounded-full text-sm">
                            Upgrade your plan
                        </div>
                        <h1 className="text-2xl font-bold text-gray-800">You’ve Reached Your Limit</h1>
                        <p className="text-gray-600">
                            You’ve reached your companion limit. Upgrade to create more companions and unlock premium features.
                        </p>
                        <Link href="/subscription" className="btn-primary w-full sm:w-auto px-6 py-2 rounded-lg text-white bg-primary hover:bg-primary/90 transition-colors">
                            Upgrade My Plan
                        </Link>
                    </div>
                )}
            </section>
        </main>
    );
};

export default NewCompanion;
