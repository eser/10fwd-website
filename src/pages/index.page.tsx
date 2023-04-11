import { NextSeo } from "next-seo";
import { type CustomPage } from "@webclient/pages/_app.types";
import { InitiativeCard } from "@webclient/shared/initiative-card/index";
import styles from "./index.module.css";

const InitiativesComponent: CustomPage<never> = () => {
  return (
    <>
      <NextSeo description="Yazılım geliştiricilerine yönelik bir meta-topluluk." />

      <div className={styles["initiative-cards"]}>
        <InitiativeCard
          tags={["desteklenen mecra"]}
          title="Codenteq"
          imageUri="/initiatives/codenteq-logo.svg"
          imageAltText="codenteq"
          description="Açık kaynak yazılım geliştirme topluluğu."
          link="https://codenteq.com/"
        />
        <InitiativeCard
          tags={["desteklenen mecra"]}
          title="Frontendship"
          imageAltText="discord.gg/frontendship"
          description="Frontend alanına yoğunlaşmış bir topluluk."
          link="https://discord.gg/frontendship"
        />
        <InitiativeCard
          tags={["desteklenen mecra"]}
          title="kamp.us"
          imageAltText="discord.gg/kampus"
          description="Silikon Vadisi deneyimlerini paylaşan yazılımcı koalaların dayanışma platformu."
          link="https://discord.gg/kampus"
        />
        <InitiativeCard
          tags={["desteklenen mecra"]}
          title="opencast.co"
          imageUri="/initiatives/opencast-logo.svg"
          imageAltText="opencast.co"
          description="Yazılım geliştirme toplulukları ve araçlarından haber sağlayan platform."
          link="https://opencast.co/"
        />
        <InitiativeCard
          tags={["desteklenen mecra"]}
          title="açık-kaynak.org"
          imageUri="/initiatives/acikkaynak-logo.svg"
          imageAltText="acik-kaynak.org"
          description="Açık kaynak hakkında bilgilendirici içeriklere ve projelere ulaşabileceğiniz bir rehber."
          link="https://acik-kaynak.org/"
        />
        <InitiativeCard
          tags={["desteklenen topluluk"]}
          title="JSTANBUL"
          imageUri="/initiatives/jstanbul-logo.svg"
          imageAltText="jstanbul.org"
          description="JavaScript ve ilintili teknolojiler ile ilgili kullanıcı topluluğu."
          link="http://jstanbul.org/"
        />
        <InitiativeCard
          tags={["desteklenen topluluk"]}
          title="Dev İzmir"
          imageUri="/initiatives/devizmir-logo.svg"
          imageAltText="devizmir.com"
          description="İzmir yerel geliştirici topluluğu."
          link="https://devizmir.com/"
        />
        <InitiativeCard
          tags={["desteklenen içerik üretimi"]}
          title="Eser Özvataf YouTube"
          imageUri="/initiatives/eserozvataf-youtube-logo.svg"
          imageAltText="youtube.com/EserOzvataf"
          description="Yazılım geliştirme üzerine içerikler üreten YouTube kanalı."
          link="https://youtube.com/EserOzvataf"
        />
        <InitiativeCard
          tags={["desteklenen içerik üretimi"]}
          title="Eser Özvataf Blog"
          imageUri="/initiatives/eserozvataf-blog-logo.svg"
          imageAltText="eser.dev"
          description="Yazılım geliştirme üzerine blog içerikleri."
          link="https://eser.dev/"
        />
        <InitiativeCard
          tags={["iletişim ağı"]}
          title="10fwd Discord"
          imageAltText="discord.io/10forward"
          description="10forward topluluğunun ortak discord sunucusu."
          link="https://discord.io/10forward"
        />
        <InitiativeCard
          tags={["iletişim ağı"]}
          title="10fwd Telegram Duyuruları"
          imageAltText="t.me/tenforward"
          description="10forward genel telegram duyuru kanalı."
          link="https://t.me/tenforward"
        />
        <InitiativeCard
          tags={["iletişim ağı"]}
          title="Açık Kaynak Geliştirme Telegram Grubu"
          imageAltText="t.me/acikkaynak"
          description="Açık kaynak geliştirme üzerine telegram tartışma grubu."
          link="https://t.me/acikkaynak"
        />
        <InitiativeCard
          tags={["iletişim ağı"]}
          title="Bilim Kurgu ve/veya Fantastik Edebiyat Yazılımcıları"
          imageAltText="t.me/bilimkurguyazilim"
          description="Bilim-Kurgu/Fantastik Edebiyat'la ilgili yazılımcılar için telegram tartışma grubu."
          link="https://t.me/bilimkurguyazilim"
        />
        <InitiativeCard
          tags={["iletişim ağı"]}
          title="Kahve Demleyen Yazılımcılar"
          imageAltText="t.me/kahveciyazilimcilar"
          description="Kahve ile ilgili yazılımcılar için telegram tartışma grubu."
          link="https://t.me/kahveciyazilimcilar"
        />
        <InitiativeCard
          tags={["iletişim ağı"]}
          title="İçki Tadan Yazılımcılar"
          imageAltText="t.me/ickiyazilim"
          description="Alkollü içkiler ile ilgili yazılımcılar için telegram tartışma grubu."
          link="https://t.me/ickiyazilim"
        />
        <InitiativeCard
          tags={["iletişim ağı"]}
          title="Oyuncu Yazılımcılar"
          imageAltText="t.me/oyunyazilim"
          description="Oyun oynayan yazılımcılar için telegram tartışma grubu."
          link="https://t.me/oyunyazilim"
        />
        <InitiativeCard
          tags={["iletişim ağı"]}
          title="Fotoğraf Çeken Yazılımcılar"
          imageAltText="t.me/fotoyazilim"
          description="Fotoğrafla ilgili yazılımcılar için telegram tartışma grubu."
          link="https://t.me/fotoyazilim"
        />
      </div>
    </>
  );
};

export { InitiativesComponent, InitiativesComponent as default };
