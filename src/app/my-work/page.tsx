'use client';

import Image from 'next/image';
import { Box, Button, Container, Typography } from '@mui/material';
import { GitHub, Launch } from '@mui/icons-material';
import { links, projects } from '@/data/site';

const strengths = [
  'AI testing workflows',
  'Full-stack product surfaces',
  'Python automation',
  'Readable learning systems',
];

export default function MyWorkPage() {
  return (
    <Box sx={{
      minHeight: '100vh',
      bgcolor: '#fbfbfa',
      background: 'linear-gradient(180deg, #fbfbfa 0%, #f3f6f4 100%)',
      py: { xs: 5, md: 8 },
    }}>
      <Container maxWidth="lg">
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '0.82fr 1.18fr' },
          gap: { xs: 4, md: 7 },
          alignItems: 'center',
          mb: { xs: 6, md: 8 },
        }}>
          <Box sx={{
            position: 'relative',
            minHeight: { xs: 280, md: 420 },
            borderRadius: '8px',
            overflow: 'hidden',
            border: '1px solid #dbe3dc',
            bgcolor: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Image
              src="/cartoon2.PNG"
              alt="Profile illustration"
              width={430}
              height={430}
              style={{
                width: '100%',
                maxWidth: '430px',
                height: 'auto',
                objectFit: 'contain',
              }}
              priority
            />
          </Box>

          <Box>
            <Typography sx={{
              color: '#64748b',
              fontSize: '0.82rem',
              fontWeight: 800,
              letterSpacing: '0.13em',
              textTransform: 'uppercase',
              mb: 1.5,
            }}>
              Portfolio
            </Typography>
            <Typography component="h1" sx={{
              color: '#172033',
              fontWeight: 800,
              fontSize: { xs: '2.3rem', md: '3.45rem' },
              lineHeight: 1.05,
              letterSpacing: 0,
              mb: 2.5,
            }}>
              Practical projects with a clear learning trail.
            </Typography>
            <Typography sx={{
              color: '#475569',
              fontSize: { xs: '1rem', md: '1.08rem' },
              lineHeight: 1.8,
              maxWidth: 680,
              mb: 3,
            }}>
              I am building toward software engineering and AI testing roles. My strongest projects connect implementation with process: automation, review loops, clean interfaces, and notes that make decisions easy to inspect.
            </Typography>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {strengths.map((strength) => (
                <Box
                  key={strength}
                  sx={{
                    border: '1px solid #ccd6cf',
                    bgcolor: 'rgba(255,255,255,0.74)',
                    color: '#334155',
                    borderRadius: '999px',
                    px: 1.5,
                    py: 0.75,
                    fontSize: '0.86rem',
                    fontWeight: 700,
                  }}
                >
                  {strength}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
          gap: 2,
          mb: 7,
        }}>
          {projects.map((project) => (
            <Box
              key={project.title}
              sx={{
                border: '1px solid #dfe7e2',
                borderRadius: '8px',
                bgcolor: 'rgba(255,255,255,0.82)',
                p: { xs: 2.4, md: 3 },
                minHeight: 260,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 14px 44px rgba(15, 23, 42, 0.06)',
              }}
            >
              <Box>
                <Typography component="h2" sx={{
                  color: '#172033',
                  fontSize: { xs: '1.35rem', md: '1.55rem' },
                  fontWeight: 800,
                  mb: 1.2,
                }}>
                  {project.title}
                </Typography>
                <Typography sx={{
                  color: '#475569',
                  lineHeight: 1.7,
                  fontSize: '0.98rem',
                  mb: 2,
                }}>
                  {project.blurbEN}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8 }}>
                  {project.tags.map((tag) => (
                    <Box
                      key={tag}
                      sx={{
                        bgcolor: '#eef3f1',
                        color: '#334155',
                        borderRadius: '6px',
                        px: 1,
                        py: 0.55,
                        fontSize: '0.78rem',
                        fontWeight: 700,
                      }}
                    >
                      {tag}
                    </Box>
                  ))}
                </Box>
              </Box>

              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.2, mt: 3 }}>
                {project.links.map((link) => (
                  <Button
                    key={link.href + link.label}
                    component="a"
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    variant={link.label === 'Code' ? 'outlined' : 'contained'}
                    startIcon={link.label === 'Code' ? <GitHub /> : <Launch />}
                    sx={{
                      borderRadius: '8px',
                      textTransform: 'none',
                      fontWeight: 800,
                      px: 1.6,
                      bgcolor: link.label === 'Code' ? 'transparent' : '#172033',
                      color: link.label === 'Code' ? '#172033' : 'white',
                      borderColor: '#cbd5e1',
                      '&:hover': {
                        bgcolor: link.label === 'Code' ? '#f8fafc' : '#0f172a',
                        borderColor: '#94a3b8',
                      },
                    }}
                  >
                    {link.label}
                  </Button>
                ))}
              </Box>
            </Box>
          ))}
        </Box>

        <Box sx={{
          borderTop: '1px solid #dfe7e2',
          pt: 3,
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: 2,
          color: '#64748b',
        }}>
          <Typography sx={{ fontSize: '0.95rem' }}>
            Open to software engineering, AI testing, and data-focused internship opportunities.
          </Typography>
          <Typography component="a" href={links.github} target="_blank" rel="noreferrer" sx={{
            color: '#172033',
            fontWeight: 800,
            textDecoration: 'none',
          }}>
            github.com/lanselylee
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
