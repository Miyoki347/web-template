import { getHero, getSiteSettings } from "@/lib/microcms";
import Header   from "@/components/layout/Header";
import Hero     from "@/components/sections/Hero";
import About    from "@/components/sections/About";
import Skills   from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Writing  from "@/components/sections/Writing";
import Contact  from "@/components/sections/Contact";
import type { HeroProps }        from "@/components/sections/Hero";
import type { ContactCmsData }   from "@/components/sections/Contact";

// ── フォールバック値（CMS 未設定時・取得失敗時に表示） ─────────
const HERO_FALLBACK: HeroProps = {
  heading:    "YOUR_HEADING",
  subheading: "YOUR_SUBHEADING",
  ctaText:    "YOUR_CTA_TEXT",
  ctaUrl:     "#contact",
};

export default async function Home() {
  // /hero と /settings を並列取得。どちらかが失敗しても止まらない
  const [heroResult, settingsResult] = await Promise.allSettled([
    getHero(),
    getSiteSettings(),
  ]);

  // Hero props: 取得成功ならCMSの値、失敗ならフォールバック
  const heroProps: HeroProps =
    heroResult.status === "fulfilled"
      ? {
          heading:    heroResult.value.heading,
          subheading: heroResult.value.subheading,
          ctaText:    heroResult.value.ctaText,
          ctaUrl:     heroResult.value.ctaUrl,
        }
      : HERO_FALLBACK;

  // Contact props: 取得成功なら連絡先情報を渡す、失敗なら null
  const contactCmsData: ContactCmsData | null =
    settingsResult.status === "fulfilled"
      ? {
          email:        settingsResult.value.email,
          twitterUrl:   settingsResult.value.twitterUrl,
          instagramUrl: settingsResult.value.instagramUrl,
        }
      : null;

  if (heroResult.status === "rejected") {
    console.error("[page] getHero failed:", heroResult.reason);
  }
  if (settingsResult.status === "rejected") {
    console.error("[page] getSiteSettings failed:", settingsResult.reason);
  }

  return (
    <>
      <Header />
      <main>
        <Hero     {...heroProps} />
        <About    />
        <Skills   />
        <Projects />
        <Writing  />
        <Contact  cmsData={contactCmsData} />
      </main>
    </>
  );
}
