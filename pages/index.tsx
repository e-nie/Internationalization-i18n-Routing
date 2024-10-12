import Image from "next/image";
import {PageWrapper} from "components/PageWrapper/PageWrapper";
import {NextPageWithLayout} from "./_app";
import {getLayout} from "components/Layout/BaseLayout/BaseLayout";
import {useRouter} from "next/router";
import {en} from "locales/en";
import {ru} from "locales/ru";
import test from "pages/test";

const Home: NextPageWithLayout = () => {
    const router = useRouter()

    const t = router.locale === "en" ? en : ru;


    console.log("router.locales: ", router.locales);
    console.log("router.locale: ", router.locale);
    console.log("router.defaultLocale: ", router.defaultLocale);

    return (
        <PageWrapper>
            <Image src = "/next.svg" alt = "Next.js Logo" width = {180}
                   height = {37} priority />
            <h1>{t.test}</h1>
        </PageWrapper>
    );
}
Home.getLayout = getLayout;
export default Home;
