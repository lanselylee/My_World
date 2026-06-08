'use client';

import Image from 'next/image';
import { Box, Typography } from '@mui/material';

const raindrops = [
  { left: '7%', delay: '0s', duration: '6.2s', height: 12, opacity: 0.08 },
  { left: '15%', delay: '2.1s', duration: '7.1s', height: 9, opacity: 0.07 },
  { left: '24%', delay: '1.2s', duration: '6.7s', height: 13, opacity: 0.08 },
  { left: '36%', delay: '3.4s', duration: '7.8s', height: 10, opacity: 0.06 },
  { left: '49%', delay: '0.8s', duration: '7.2s', height: 14, opacity: 0.07 },
  { left: '62%', delay: '2.7s', duration: '6.5s', height: 10, opacity: 0.07 },
  { left: '73%', delay: '1.6s', duration: '8s', height: 12, opacity: 0.08 },
  { left: '83%', delay: '3.1s', duration: '6.9s', height: 8, opacity: 0.06 },
  { left: '92%', delay: '0.4s', duration: '7.4s', height: 13, opacity: 0.07 },
];

export default function Home() {
  return (
    <Box sx={{
      minHeight: 'calc(100vh - 73px)',
      bgcolor: '#fffefe',
      position: 'relative',
      overflow: 'hidden',
      '@keyframes rainFall': {
        '0%': { transform: 'translateY(-40px)', opacity: 0 },
        '16%': { opacity: 1 },
        '84%': { opacity: 1 },
        '100%': { transform: 'translateY(108vh)', opacity: 0 },
      },
    }}>
      <Box sx={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
        {raindrops.map((drop) => (
          <Box
            key={drop.left}
            sx={{
              position: 'absolute',
              left: drop.left,
              top: '-28px',
              width: '1.5px',
              height: `${drop.height}px`,
              borderRadius: '999px',
              background: `rgba(20, 20, 20, ${drop.opacity})`,
              animation: `rainFall ${drop.duration} linear infinite`,
              animationDelay: drop.delay,
            }}
          />
        ))}
      </Box>

      <Box sx={{
        position: 'absolute',
        zIndex: 2,
        left: { xs: '5.5%', sm: '7%', md: '13%', lg: '15%' },
        top: { xs: '13%', sm: '14%', md: '25%', lg: '26%' },
        width: { xs: '84%', sm: '62%', md: '34%', lg: '30%' },
        textAlign: { xs: 'center', md: 'center' },
      }}>
        <Typography
          component="h1"
          sx={{
            color: '#111',
            fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
            fontWeight: 300,
            fontSize: { xs: '2.28rem', sm: '3rem', md: '3.55rem', lg: '3.95rem' },
            lineHeight: 1,
            letterSpacing: { xs: '0.12em', md: '0.14em' },
            textIndent: { xs: '0.12em', md: '0.14em' },
            mb: { xs: 2.2, md: 4.6 },
          }}
        >
          XIAOMENG
        </Typography>

        <Typography sx={{
          color: '#666',
          fontSize: { xs: '0.95rem', md: '1.02rem' },
          lineHeight: 1.9,
          fontWeight: 300,
          maxWidth: 520,
          mx: 'auto',
        }}>
          Welcome to Xiaomeng&apos;s personal website, where you&apos;ll find code, learning notes, hand-drawn dreams, and small stories from everyday life.
        </Typography>
      </Box>

      <Box sx={{
        position: 'absolute',
        zIndex: 1,
        left: { xs: '-58vw', sm: '-36vw', md: '-8vw', lg: '-4vw' },
        right: { xs: '-58vw', sm: '-36vw', md: '-8vw', lg: '-4vw' },
        bottom: { xs: '-8vh', sm: '-10vh', md: '-20vh', lg: '-23vh' },
        height: { xs: '69vh', sm: '72vh', md: '91vh', lg: '96vh' },
        pointerEvents: 'none',
      }}>
        <Image
          src="/cartoon1.PNG"
          alt="Xiaomeng working in her illustrated world"
          fill
          sizes="100vw"
          style={{
            objectFit: 'contain',
            objectPosition: 'center bottom',
            mixBlendMode: 'multiply',
          }}
          priority
        />
      </Box>
    </Box>
  );
}
