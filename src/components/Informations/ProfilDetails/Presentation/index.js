import React from "react";
import { Box } from "@mui/material";
import Typography from "@mui/joy/Typography";

export function PresentationText() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="left"
      gap="20px"
    >
      <Typography
        sx={{
          color: "#484848",
          textAlign: "left",
          fontSize: "16px",
          fontFamily: "Nunito sans",
          lineHeight: "19.1px",
          fontWeight: "700",
          width: "100%",
        }}
      >
        Avec une solide expérience dans le développement web et mobile, je suis
        à la recherche d'une{" "}
        <Typography level="body2" textColor="#EE5F36" fontWeight="bold">
          ALTERNANCE{" "}
        </Typography>
        dans la{" "}
        <Typography level="body2" textColor="#EE5F36">
          cybersécurité,
        </Typography>{" "}
        un domaine dans laquelle, je souhaite me spécialiser. Ma Maîtrise des
        langages clés, des framework comme React, et mon portfolio varié
        témoigne de ma capacité à créer des expériences numériques innovantes et
        sécurisées .Prêt à m'investir pleinement et à apprendre au sein d'une
        équipe dynamique et engagée dans la cybersécurité !
      </Typography>
      <Box display="flex" flexDirection="column" gap="10px">
        <Typography
          sx={{
            fontSize: "14px",
            color: "#484848",
            fontStyle: "normal",
            fontWeight: "400",
            fontFamily: "Nunito sans",
          }}
        >
          Je suis né au Sénégal et je suis titulaire d'un Master 2 en
          littérature et civilisation américaine et caribéenne.
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            color: "#484848",
            fontStyle: "normal",
            fontWeight: "400",
            fontFamily: "Nunito sans",
          }}
        >
          Après le master, je me suis formé en autodidacte avant de créer une
          société multimédia tout en enseignant l'anglais à des lycéens,
          collégiens et particuliers. Je suis arrivé en France début 2020 et
          j'ai continué à me former en autodidacte avant d'intégrer la formation
          de développeur.
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            color: "#484848",
            fontStyle: "normal",
            fontWeight: "400",
            fontFamily: "Nunito sans",
          }}
        >
          Je me suis tourné donc vers Entourage-pro(Ex LinkedOut) pour
          bénéficier de son accompagnement dans ma recherche d'un emploi fiable,
          stable et durable afin de réaliser mes projets d'avenir.
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            color: "#484848",
            fontStyle: "normal",
            fontWeight: "400",
            fontFamily: "Nunito sans",
          }}
        >
          Mon parcours atypique témoigne de ma grande polyvalence, de mon
          adaptabilité, d'une grande résilience et d'une détermination sans
          faille à atteindre mon but.
        </Typography>
      </Box>
    </Box>
  );
}
