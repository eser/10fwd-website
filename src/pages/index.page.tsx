import { NextSeo } from "next-seo";
import { type CustomPage } from "@webclient/pages/_app.types";
import { Card } from "@webclient/shared/card/index";
import styles from "./index.module.css";

const Home: CustomPage = () => {
  return (
    <>
      <NextSeo description="Yazılım geliştiricilerine yönelik bir meta-topluluk." />

      <div className={styles["cards"]}>
        <Card
          tags={["desteklenen mecra"]}
          title="opencast.co"
          imageUri="/covers/opencast-logo.svg"
          imageAltText="opencast.co"
          description="Yazılım geliştirme toplulukları ve araçlarından haber sağlayan platform."
          link="https://opencast.co/"
        />
        <Card
          tags={["desteklenen mecra"]}
          title="açık-kaynak.org"
          imageUri="/covers/acikkaynak-logo.svg"
          imageAltText="acik-kaynak.org"
          description="Açık kaynak hakkında bilgilendirici içeriklere ve projelere ulaşabileceğiniz bir rehber."
          link="https://acik-kaynak.org/"
        />
        <Card
          tags={["desteklenen topluluk"]}
          title="JSTANBUL"
          imageUri="/covers/jstanbul-logo.svg"
          imageAltText="jstanbul.org"
          description="JavaScript ve ilintili teknolojiler ile ilgili kullanıcı topluluğu."
          link="http://jstanbul.org/"
        />
        <Card
          tags={["desteklenen topluluk"]}
          title="Dev İzmir"
          imageUri="/covers/devizmir-logo.svg"
          imageAltText="devizmir.com"
          description="İzmir yerel geliştirici topluluğu."
          link="https://devizmir.com/"
        />
        <Card
          tags={["desteklenen içerik üretimi"]}
          title="Eser Özvataf YouTube"
          imageUri="/covers/eserozvataf-youtube-logo.svg"
          imageAltText="youtube.com/EserOzvataf"
          description="Yazılım geliştirme üzerine içerikler üreten YouTube kanalı."
          link="https://youtube.com/EserOzvataf"
        />
        <Card
          tags={["desteklenen içerik üretimi"]}
          title="Eser Özvataf Blog"
          imageUri="/covers/eserozvataf-blog-logo.svg"
          imageAltText="eser.dev"
          description="Yazılım geliştirme üzerine blog içerikleri."
          link="https://eser.dev/"
        />
        <Card
          tags={["iletişim ağı"]}
          title="10fwd Discord"
          imageAltText="discord.io/10forward"
          description="10forward topluluğunun ortak discord sunucusu."
          link="https://discord.io/10forward"
        />
        <Card
          tags={["iletişim ağı"]}
          title="10fwd Telegram Duyuruları"
          imageAltText="t.me/tenforward"
          description="10forward genel telegram duyuru kanalı."
          link="https://t.me/tenforward"
        />
        <Card
          tags={["iletişim ağı"]}
          title="Açık Kaynak Geliştirme Telegram Grubu"
          imageAltText="t.me/acikkaynak"
          description="Açık kaynak geliştirme üzerine telegram tartışma grubu."
          link="https://t.me/acikkaynak"
        />
        <Card
          tags={["iletişim ağı"]}
          title="Bilim Kurgu ve/veya Fantastik Edebiyat Yazılımcıları"
          imageAltText="t.me/bilimkurguyazilim"
          description="Bilim-Kurgu/Fantastik Edebiyat'la ilgili yazılımcılar için telegram tartışma grubu."
          link="https://t.me/bilimkurguyazilim"
        />
        <Card
          tags={["iletişim ağı"]}
          title="Kahve Demleyen Yazılımcılar"
          imageAltText="t.me/kahveciyazilimcilar"
          description="Kahve ile ilgili yazılımcılar için telegram tartışma grubu."
          link="https://t.me/kahveciyazilimcilar"
        />
        <Card
          tags={["iletişim ağı"]}
          title="İçki Tadan Yazılımcılar"
          imageAltText="t.me/ickiyazilim"
          description="Alkollü içkiler ile ilgili yazılımcılar için telegram tartışma grubu."
          link="https://t.me/ickiyazilim"
        />
        <Card
          tags={["iletişim ağı"]}
          title="Oyuncu Yazılımcılar"
          imageAltText="t.me/oyunyazilim"
          description="Oyun oynayan yazılımcılar için telegram tartışma grubu."
          link="https://t.me/oyunyazilim"
        />
        <Card
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

export { Home, Home as default };
