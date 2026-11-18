import { useRef } from 'react';
import { Box, Button, Container, Fade, Slide, Stack, Typography } from '@mui/material';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import marcioLogo from '../assets/logo-marcio.jpeg';
import companyShield from '../assets/escudo-empresa.png';
import marcioPortrait from '../assets/marcio-retrato.png';

const LINKS = {
  quote: 'https://cotacao.me/2YGv4zQe?id=NrPebxME',
  whatsapp: 'https://wa.me/message/DKJFCDOJMU3PJ1',
  instagram: 'https://www.instagram.com/marciolopes_consultor?xtok=Ym5vZ3FmcGpsdjBu',
};

function InstagramMark() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle className="ig-dot" cx="17.5" cy="6.8" r="1"/></svg>;
}

function WhatsAppMark() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.3-4.7A8.5 8.5 0 1 1 20.5 11.7Z"/><path d="M9 8.2c.2-.5.4-.5.7-.5h.5c.2 0 .4.1.5.4l.8 1.8c.1.2.1.4 0 .6l-.5.7c-.1.2-.2.3 0 .5.4.7 1 1.3 1.7 1.7.2.1.4.1.5-.1l.7-.8c.2-.2.4-.3.6-.2l1.7.8c.3.1.4.3.4.5 0 .3-.2 1.2-.7 1.6-.5.5-1.1.7-1.8.6-1-.1-2.3-.7-3.5-1.7-1.5-1.3-2.5-2.9-2.8-3.9-.3-1 .1-1.7.5-2Z"/></svg>;
}

function SocialLink({ href, kind, children }) {
  const Icon = kind === 'whatsapp' ? WhatsAppMark : InstagramMark;
  return (
    <Button
      className={`social-button social-${kind}`}
      component="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      startIcon={<Icon />}
      endIcon={<ArrowOutwardRoundedIcon />}
      disableElevation
    >
      {children}
    </Button>
  );
}

export default function App() {
  const heroRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 115]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, reduceMotion ? 1 : 1.08]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -58]);

  return (
    <Box className="page">
      <Box className="hero" ref={heroRef} id="inicio">
        <motion.div className="hero-backdrop" style={{ y: imageY, scale: imageScale }} />
        <motion.div className="hero-glow" style={{ y: glowY }} />
        <Box className="hero-shade" />
        <Container maxWidth="xl" className="hero-container">
          <Box component="header" className="topbar">
            <a className="brand" href="#inicio" aria-label="Marcio Lopes, início">
              <Box className="brand-logo"><img src={marcioLogo} alt="" /></Box>
              <Box className="brand-text"><strong>Marcio Lopes</strong><span>Consultor de proteção veicular</span></Box>
            </a>
            <Stack component="nav" direction="row" spacing={{ xs: 1, sm: 3 }} className="navigation" aria-label="Navegação principal">
              <a href="#sobre">Sobre mim</a>
              <a href="#cotacao">Como funciona</a>
              <a href="#contato">Contato</a>
              <Button className="nav-quote" component="a" href={LINKS.quote} target="_blank" rel="noopener noreferrer" endIcon={<ArrowOutwardRoundedIcon />}>Fazer cotação</Button>
            </Stack>
          </Box>
          <Box className="hero-main">
            <Fade in timeout={900}>
              <Box className="hero-copy">
                <Typography className="eyebrow"><span /> Consultor de proteção veicular</Typography>
                <Typography component="h1" className="hero-title">Mais tranquilidade para seguir o seu <em>caminho.</em></Typography>
                <Typography className="hero-description">Sou Marcio Lopes. Conte comigo para conhecer as opções de proteção veicular e fazer sua cotação com atendimento próximo e direto.</Typography>
              <Box className="location-tag"><PlaceOutlinedIcon /><span>Atendimento em <strong>Gurinhém e região</strong></span></Box>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} className="hero-actions">
                  <Button className="primary-action" component="a" href={LINKS.quote} target="_blank" rel="noopener noreferrer" endIcon={<ArrowOutwardRoundedIcon />}>Fazer minha cotação</Button>
                  <SocialLink kind="whatsapp" href={LINKS.whatsapp}>Conversar no WhatsApp</SocialLink>
                </Stack>
                <Box className="social-row" id="contato">
                  <Typography>Me acompanhe e fale comigo</Typography>
                  <SocialLink kind="instagram" href={LINKS.instagram}>Instagram</SocialLink>
                  <SocialLink kind="whatsapp" href={LINKS.whatsapp}>WhatsApp</SocialLink>
                </Box>
              </Box>
            </Fade>
            <Slide direction="up" in timeout={1050}>
              <Box className="hero-badge">
                <img src={companyShield} alt="" />
                <span><strong>Proteção veicular</strong><small>Atendimento personalizado</small></span>
              </Box>
            </Slide>
          </Box>
          <a className="scroll-cue" href="#sobre"><span>Conheça Marcio Lopes</span><KeyboardArrowDownRoundedIcon /></a>
        </Container>
      </Box>

      <Box component="section" className="quote-process" id="cotacao">
        <Container maxWidth="lg">
          <Typography className="eyebrow process-eyebrow"><span /> Simples e direto</Typography>
          <Typography component="h2" className="process-title">Como funciona a cotação?</Typography>
          <Typography className="process-intro">Faça sua solicitação online e conte com Marcio Lopes para orientar você nos próximos passos.</Typography>
          <Box className="steps-grid">
            <Box className="step-card"><span className="step-number">01</span><Typography component="h3">Acesse o formulário</Typography><Typography>Abra o link de cotação e comece sua solicitação online.</Typography></Box>
            <Box className="step-card"><span className="step-number">02</span><Typography component="h3">Informe os dados</Typography><Typography>Preencha as informações solicitadas para fazer a cotação do seu veículo.</Typography></Box>
            <Box className="step-card"><span className="step-number">03</span><Typography component="h3">Fale com Marcio Lopes</Typography><Typography>Se tiver dúvidas, chame Marcio Lopes no WhatsApp para receber orientação sobre o atendimento.</Typography></Box>
          </Box>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} className="process-actions">
            <Button className="process-quote" component="a" href={LINKS.quote} target="_blank" rel="noopener noreferrer" endIcon={<ArrowOutwardRoundedIcon />}>Iniciar cotação</Button>
            <SocialLink kind="whatsapp" href={LINKS.whatsapp}>Tirar dúvidas pelo WhatsApp</SocialLink>
          </Stack>
        </Container>
      </Box>

      <Box component="section" className="about" id="sobre">
        <Container maxWidth="lg" className="about-grid">
          <Fade in timeout={1000}>
            <Box className="about-photo-wrap">
              <motion.img className="about-photo" src={marcioPortrait} alt="Marcio Lopes em seu escritório" whileInView={reduceMotion ? {} : { y: [16, 0], scale: [1.02, 1] }} viewport={{ once: true }} transition={{ duration: .8, ease: 'easeOut' }} />
              <img className="about-shield" src={companyShield} alt="Escudo da empresa de proteção veicular" />
            </Box>
          </Fade>
          <Slide direction="left" in timeout={800}>
            <Box className="about-copy">
              <Typography className="eyebrow dark"><span /> Prazer, sou Marcio Lopes</Typography>
              <Typography component="h2">Pode contar comigo para proteger o que move você.</Typography>
              <Typography className="about-description">Meu trabalho é ouvir o que você precisa, explicar as opções com clareza e acompanhar você durante a cotação. Fale comigo para saber mais sobre proteção para o seu veículo.</Typography>
              <Button className="about-link" component="a" href={LINKS.quote} target="_blank" rel="noopener noreferrer" endIcon={<ArrowOutwardRoundedIcon />}>Começar uma cotação</Button>
            </Box>
          </Slide>
        </Container>
      </Box>

      <Box component="footer" className="footer">
        <Container maxWidth="xl" className="footer-inner">
          <span>© 2026 Marcio Lopes · Consultor de Proteção Veicular</span>
          <address className="footer-address">AV. SENADOR HUMBERTO LUCENA | Nº 39, CENTRO.<br />GURINHÉM - PB / 58356000</address>
          <Stack direction="row" spacing={1.25}>
            <SocialLink kind="whatsapp" href={LINKS.whatsapp}>WhatsApp</SocialLink>
            <SocialLink kind="instagram" href={LINKS.instagram}>Instagram</SocialLink>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
