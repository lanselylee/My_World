'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Box, Button, Container, Typography } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';

const whispers = ['AI Testing', 'Code', 'Stories', 'Dreams'];

export default function Home() {
  return (
    <Box sx={{
      minHeight: 'calc(100vh - 73px)',
      bgcolor: '#fffefe',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <Container
        maxWidth={false}
        sx={{
          minHeight: 'calc(100vh - 73px)',
          position: 'relative',
          px: { xs: 2.5, sm: 5, md: 8 },
          pt: { xs: 9, md: 11 },
          pb: { xs: 0, md: 0 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box sx={{
          width: '100%',
          maxWidth: 980,
          textAlign: 'center',
          position: 'relative',
          zIndex: 2,
        }}>
          <Typography
            component="h1"
            sx={{
              color: '#151515',
              fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
              fontWeight: 300,
              fontSize: { xs: '3.4rem', sm: '4.8rem', md: '6.8rem' },
              lineHeight: 0.95,
              letterSpacing: { xs: '0.12em', md: '0.18em' },
              textIndent: { xs: '0.12em', md: '0.18em' },
              mb: { xs: 2.2, md: 2.6 },
            }}
          >
            XIAOMENG
          </Typography>

          <Typography sx={{
            color: '#5f6368',
            fontSize: { xs: '0.98rem', md: '1.05rem' },
            lineHeight: 1.9,
            fontWeight: 300,
            maxWidth: 620,
            mx: 'auto',
            mb: { xs: 2.6, md: 3.2 },
          }}>
            A small personal world for code, learning notes, visual stories, and the soft courage of building things carefully.
          </Typography>

          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: { xs: 1.2, md: 2 },
            mb: { xs: 2.5, md: 3 },
          }}>
            {whispers.map((item) => (
              <Typography
                key={item}
                sx={{
                  color: '#222',
                  fontSize: '0.78rem',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  fontWeight: 400,
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>

          <Button
            component={Link}
            href="/my-work"
            variant="text"
            endIcon={<ArrowForward />}
            sx={{
              color: '#111',
              borderBottom: '1px solid #111',
              borderRadius: 0,
              px: 0,
              py: 0.6,
              textTransform: 'none',
              fontSize: '0.95rem',
              fontWeight: 400,
              letterSpacing: '0.03em',
              '&:hover': {
                bgcolor: 'transparent',
                borderBottomColor: '#777',
              },
            }}
          >
            enter my world
          </Button>
        </Box>

        <Box sx={{
          position: 'relative',
          zIndex: 1,
          width: 'min(1180px, 112vw)',
          height: { xs: '43vh', sm: '48vh', md: '52vh' },
          minHeight: { xs: 310, md: 430 },
          mt: { xs: 3, md: 1 },
          mx: 'auto',
          overflow: 'visible',
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
      </Container>
    </Box>
  );
}
