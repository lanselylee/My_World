'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Box, Button, Container, Typography } from '@mui/material';
import { ArrowForward, GitHub, WorkOutline } from '@mui/icons-material';
import { links, projects, site } from '@/data/site';

const focusAreas = ['AI Testing', 'Full-stack Apps', 'Data Science', 'Learning Systems'];

const raindrops = [
  { left: '8%', delay: '0s', duration: '4.5s', height: 18 },
  { left: '18%', delay: '1.2s', duration: '5.2s', height: 12 },
  { left: '31%', delay: '0.6s', duration: '4.8s', height: 16 },
  { left: '44%', delay: '2.1s', duration: '5.6s', height: 13 },
  { left: '57%', delay: '1.6s', duration: '4.9s', height: 17 },
  { left: '69%', delay: '0.3s', duration: '5.4s', height: 12 },
  { left: '82%', delay: '2.8s', duration: '4.7s', height: 15 },
  { left: '93%', delay: '1s', duration: '5.8s', height: 14 },
];

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <Box sx={{
      minHeight: 'calc(100vh - 73px)',
      bgcolor: '#fbfbfa',
      position: 'relative',
      overflow: 'hidden',
      backgroundImage: `
        linear-gradient(135deg, rgba(255,255,255,0.96) 0%, rgba(244,247,246,0.9) 100%),
        radial-gradient(circle at 85% 15%, rgba(107, 114, 128, 0.12), transparent 30%)
      `,
      '@keyframes rainFall': {
        '0%': { transform: 'translateY(-40px)', opacity: 0 },
        '15%': { opacity: 0.45 },
        '85%': { opacity: 0.45 },
        '100%': { transform: 'translateY(105vh)', opacity: 0 },
      },
    }}>
      <Box sx={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
        {raindrops.map((drop) => (
          <Box
            key={drop.left}
            sx={{
              position: 'absolute',
              left: drop.left,
              top: '-24px',
              width: '2px',
              height: `${drop.height}px`,
              borderRadius: '999px',
              background: 'linear-gradient(to bottom, rgba(31,41,55,0.02), rgba(31,41,55,0.42))',
              animation: `rainFall ${drop.duration} linear infinite`,
              animationDelay: drop.delay,
            }}
          />
        ))}
      </Box>

      <Container maxWidth="lg" sx={{
        position: 'relative',
        zIndex: 1,
        minHeight: 'calc(100vh - 73px)',
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '1.08fr 0.92fr' },
        alignItems: 'center',
        gap: { xs: 5, md: 8 },
        py: { xs: 7, md: 9 },
      }}>
        <Box>
          <Typography sx={{
            color: '#64748b',
            fontSize: '0.82rem',
            fontWeight: 700,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            mb: 2,
          }}>
            Seattle · CS + Data Science
          </Typography>

          <Typography
            component="h1"
            sx={{
              color: '#172033',
              fontWeight: 700,
              fontSize: { xs: '2.65rem', sm: '3.5rem', md: '4.4rem' },
              lineHeight: 0.98,
              letterSpacing: 0,
              maxWidth: 720,
              mb: 3,
            }}
          >
            Xiaomeng Li builds practical AI and software tools.
          </Typography>

          <Typography sx={{
            color: '#475569',
            fontSize: { xs: '1rem', md: '1.12rem' },
            lineHeight: 1.8,
            maxWidth: 650,
            mb: 4,
          }}>
            {site.headlineEN} I care about clear interfaces, reliable workflows, and the small systems that help people learn and build better.
          </Typography>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.2, mb: 4 }}>
            {focusAreas.map((area) => (
              <Box
                key={area}
                sx={{
                  px: 1.5,
                  py: 0.75,
                  border: '1px solid #d7dde5',
                  borderRadius: '999px',
                  color: '#334155',
                  bgcolor: 'rgba(255,255,255,0.72)',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                }}
              >
                {area}
              </Box>
            ))}
          </Box>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
            <Button
              component={Link}
              href="/my-work"
              variant="contained"
              startIcon={<WorkOutline />}
              endIcon={<ArrowForward />}
              sx={{
                bgcolor: '#172033',
                color: 'white',
                borderRadius: '8px',
                px: 2.4,
                py: 1.1,
                textTransform: 'none',
                fontWeight: 700,
                '&:hover': { bgcolor: '#0f172a' },
              }}
            >
              View Work
            </Button>
            <Button
              component="a"
              href={links.github}
              target="_blank"
              rel="noreferrer"
              variant="outlined"
              startIcon={<GitHub />}
              sx={{
                borderColor: '#cbd5e1',
                color: '#172033',
                borderRadius: '8px',
                px: 2.2,
                py: 1.1,
                textTransform: 'none',
                fontWeight: 700,
              }}
            >
              GitHub
            </Button>
          </Box>
        </Box>

        <Box sx={{
          display: 'grid',
          gridTemplateRows: 'auto auto',
          gap: 2,
          alignSelf: 'center',
        }}>
          <Box sx={{
            position: 'relative',
            minHeight: { xs: 310, md: 430 },
            border: '1px solid #dde4ed',
            borderRadius: '8px',
            overflow: 'hidden',
            bgcolor: '#ffffff',
            boxShadow: '0 22px 80px rgba(15, 23, 42, 0.12)',
          }}>
            <Image
              src="/cartoon1.PNG"
              alt="Xiaomeng's illustrated world"
              fill
              sizes="(max-width: 900px) 100vw, 42vw"
              style={{ objectFit: 'cover', objectPosition: 'center 52%' }}
              priority
            />
          </Box>

          <Box sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
            gap: 1.2,
          }}>
            {featured.map((project) => (
              <Box
                key={project.title}
                sx={{
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  bgcolor: 'rgba(255,255,255,0.78)',
                  p: 1.5,
                  minHeight: 108,
                }}
              >
                <Typography sx={{ color: '#0f172a', fontWeight: 800, fontSize: '0.92rem', mb: 0.7 }}>
                  {project.title}
                </Typography>
                <Typography sx={{ color: '#64748b', fontSize: '0.78rem', lineHeight: 1.45 }}>
                  {project.tags.join(' · ')}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
