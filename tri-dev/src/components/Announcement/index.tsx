import styles from "./styles.module.scss";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Link from "next/link";
import { Button, Box } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export const Announcement = () => {
  return (
    <Box className={styles.container} id='home'>
      <Box className={styles.firstBox}>
        <Box className={styles.inativeButton}>
          <p className={styles.textInativeButton}>A P R O V E I T E</p>
        </Box>
        <Box marginLeft={1}>
          <p className={styles.textAnnouncement}>
            Condições especiais para todo o mês!
          </p>
        </Box>
      </Box>

      <Box className={styles.lastBox}>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          marginRight={2}
        >
          <Link className={styles.linkWhatsapp} href="#text-buttons">
            <p className={styles.textLinkWhatsapp}>Chamar no WhatsApp</p>
            <div className={styles.boxIconWhatsApp}>
              <WhatsAppIcon className={styles.iconWhatsapp} />
            </div>
          </Link>
        </Box>

        <Button
          sx={{
            padding: "5px 2px 5px 10px !important",
            ":hover": { boxShadow: "none", backgroundColor: "#006affe4" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "10px",
          }}
          color="primary"
          variant="contained"
        >
          <p className={styles.textButton}>Quero meu Site</p>

          <NavigateNextIcon />
        </Button>
      </Box>
    </Box>
  );
};
