'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Box, Button, Dialog, DialogContent, DialogTitle, Snackbar, Typography } from '@mui/material';
import { ArticleOutlined, ContentCopy, GitHub, LinkedIn, MailOutline, OpenInNew } from '@mui/icons-material';

const emailAddress = 'li.xiaomen@northeastern.edu';

const proofPoints = [
  {
    label: 'Current',
    title: 'M.S. Computer Science',
    body: 'Northeastern University, Seattle. Building toward SDE roles across full-stack, AI tooling, and developer experience.',
  },
  {
    label: 'Engineering',
    title: 'AI testing startup',
    body: 'Working on AI-powered testing workflows, product analytics, report generation, collaboration features, and automation for developer-facing QA systems.',
  },
  {
    label: 'Difference',
    title: 'Escape-room designer',
    body: 'Spent two years in Beijing creating original horror-room themes, puzzle flow, player journeys, and market storytelling for a venue that reached national hot rankings and Beijing No. 1.',
  },
];

const stack = [
  ['Frontend', 'React, Next.js, TypeScript, Material UI, responsive UI'],
  ['Backend', 'Python, Java, REST APIs, AWS Lambda, data workflows'],
  ['AI tools', 'LLM workflows, MCP integrations, Claude Code, Codex, browser automation'],
  ['Product sense', 'Puzzle logic, user flow, feedback loops, storytelling, iteration'],
];

const focusAreas = [
  'Full-stack software engineering',
  'AI-native developer tools',
  'Testing automation and observability',
  'Interactive web experiences',
];

export default function AboutPage() {
  const [emailDialogOpen, setEmailDialogOpen] = useState(false);
  const [copiedOpen, setCopiedOpen] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(emailAddress);
    setCopiedOpen(true);
  };

  return (
    <Box sx={{
      minHeight: '100vh',
      bgcolor: '#fffdf8',
      color: '#171511',
      position: 'relative',
      overflow: 'hidden',
      px: { xs: 2.5, sm: 5, md: 8 },
      py: { xs: 5.5, md: 8 },
      backgroundImage: `
        linear-gradient(180deg, rgba(255,253,248,0.98), rgba(248,245,238,0.96)),
        repeating-linear-gradient(90deg, rgba(20,18,16,0.025) 0, rgba(20,18,16,0.025) 1px, transparent 1px, transparent 96px)
      `,
    }}>
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '0.88fr 1.12fr' },
        gap: { xs: 4, md: 7 },
        alignItems: 'center',
        minHeight: { md: '72vh' },
        mb: { xs: 5.5, md: 7.5 },
      }}>
        <Box sx={{
          maxWidth: 620,
          order: { xs: 1, md: 1 },
          pl: { md: 1 },
        }}>
          <Typography sx={{
            color: '#777067',
            fontSize: '0.78rem',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            mb: 1.4,
          }}>
            Profile for SDE roles
          </Typography>

          <Typography component="h1" sx={{
            color: '#111',
            fontSize: { xs: '2.25rem', sm: '2.75rem', md: '3.45rem' },
            fontWeight: 300,
            lineHeight: 1.08,
            letterSpacing: { xs: '0.035em', md: '0.055em' },
            textTransform: 'uppercase',
            mb: { xs: 2, md: 2.5 },
          }}>
            Builder with
            <br />
            system sense
          </Typography>

          <Typography sx={{
            color: '#5d5750',
            fontSize: { xs: '0.98rem', md: '1.05rem' },
            lineHeight: { xs: 1.75, md: 1.86 },
            fontWeight: 300,
            maxWidth: 560,
            mb: { xs: 2.4, md: 3 },
          }}>
            I am a software engineer in training who likes turning messy human workflows into clear, testable systems. My path runs from horror-room storytelling and puzzle design to AI testing tools, web products, and developer workflows.
          </Typography>

          <Box sx={{
            borderTop: '1px solid rgba(23,21,17,0.14)',
            borderBottom: '1px solid rgba(23,21,17,0.14)',
            py: 1.8,
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))' },
            gap: { xs: 1.1, sm: 1.35 },
            mb: { xs: 2.5, md: 3.2 },
            maxWidth: 600,
          }}>
            {focusAreas.map((area) => (
              <Typography
                key={area}
                sx={{
                  color: '#36312b',
                  fontSize: '0.9rem',
                  lineHeight: 1.45,
                  fontWeight: 300,
                }}
              >
                {area}
              </Typography>
            ))}
          </Box>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.1 }}>
            <Button
              href="/Xiaomeng_Li_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              variant="outlined"
              startIcon={<ArticleOutlined />}
              sx={{
                color: '#171511',
                borderColor: 'rgba(23,21,17,0.32)',
                borderRadius: 0,
                textTransform: 'none',
                px: 2,
                py: 1,
                fontWeight: 400,
                '&:hover': { borderColor: '#171511', bgcolor: 'rgba(23,21,17,0.04)' },
              }}
            >
              resume
            </Button>
            <Button
              onClick={() => setEmailDialogOpen(true)}
              variant="text"
              startIcon={<MailOutline />}
              sx={{
                color: '#171511',
                borderRadius: 0,
                textTransform: 'none',
                px: 0.5,
                py: 1,
                fontWeight: 400,
                '&:hover': { bgcolor: 'transparent', color: '#6b1f1f' },
              }}
            >
              email
            </Button>
            <Button
              href="https://github.com/lanselylee"
              target="_blank"
              rel="noreferrer"
              variant="text"
              startIcon={<GitHub />}
              sx={{
                color: '#171511',
                borderRadius: 0,
                textTransform: 'none',
                px: 0.5,
                py: 1,
                fontWeight: 400,
                '&:hover': { bgcolor: 'transparent', color: '#6b1f1f' },
              }}
            >
              GitHub
            </Button>
            <Button
              href="https://www.linkedin.com/in/xiaomeng-li-70730a331/"
              target="_blank"
              rel="noreferrer"
              variant="text"
              startIcon={<LinkedIn />}
              sx={{
                color: '#171511',
                borderRadius: 0,
                textTransform: 'none',
                px: 0.5,
                py: 1,
                fontWeight: 400,
                '&:hover': { bgcolor: 'transparent', color: '#6b1f1f' },
              }}
            >
              LinkedIn
            </Button>
          </Box>

          <Dialog
            open={emailDialogOpen}
            onClose={() => setEmailDialogOpen(false)}
            maxWidth="xs"
            fullWidth
            PaperProps={{
              sx: {
                borderRadius: 0,
                bgcolor: '#fffdf8',
                border: '1px solid rgba(23,21,17,0.16)',
                boxShadow: '0 18px 48px rgba(23,21,17,0.16)',
              },
            }}
          >
            <DialogTitle sx={{
              color: '#171511',
              fontWeight: 300,
              fontSize: '1.35rem',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              pb: 1,
            }}>
              Contact Xiaomeng
            </DialogTitle>
            <DialogContent sx={{ pt: 0, pb: 3 }}>
              <Typography sx={{
                color: '#6b645b',
                fontSize: '0.92rem',
                lineHeight: 1.7,
                fontWeight: 300,
                mb: 1.8,
              }}>
                Copy my email, or open your default mail app if you prefer sending directly.
              </Typography>
              <Box sx={{
                borderTop: '1px solid rgba(23,21,17,0.14)',
                borderBottom: '1px solid rgba(23,21,17,0.14)',
                py: 1.5,
                mb: 2,
              }}>
                <Typography sx={{
                  color: '#171511',
                  fontSize: { xs: '0.95rem', sm: '1rem' },
                  lineHeight: 1.5,
                  wordBreak: 'break-all',
                  fontWeight: 300,
                }}>
                  {emailAddress}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.1 }}>
                <Button
                  onClick={copyEmail}
                  variant="outlined"
                  startIcon={<ContentCopy />}
                  sx={{
                    color: '#171511',
                    borderColor: 'rgba(23,21,17,0.32)',
                    borderRadius: 0,
                    textTransform: 'none',
                    px: 2,
                    py: 1,
                    fontWeight: 400,
                    '&:hover': { borderColor: '#171511', bgcolor: 'rgba(23,21,17,0.04)' },
                  }}
                >
                  copy email
                </Button>
                <Button
                  href={`mailto:${emailAddress}`}
                  startIcon={<OpenInNew />}
                  sx={{
                    color: '#171511',
                    borderRadius: 0,
                    textTransform: 'none',
                    px: 0.5,
                    py: 1,
                    fontWeight: 400,
                    '&:hover': { bgcolor: 'transparent', color: '#6b1f1f' },
                  }}
                >
                  open mail app
                </Button>
              </Box>
            </DialogContent>
          </Dialog>

          <Snackbar
            open={copiedOpen}
            autoHideDuration={2200}
            onClose={() => setCopiedOpen(false)}
            message="Email copied"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          />
        </Box>

        <Box sx={{
          position: 'relative',
          minHeight: { xs: 250, sm: 350, md: 590 },
          maxWidth: { xs: 340, sm: 480, md: 'none' },
          width: '100%',
          mx: { xs: 'auto', md: 0 },
          order: { xs: 2, md: 2 },
          overflow: 'hidden',
          '& img': {
            transform: { xs: 'scale(1.12) translateY(-4px)', sm: 'scale(1.08) translateY(-4px)', md: 'none' },
          },
        }}>
          <Image
            src="/cartoon6.PNG"
            alt="Illustration for Xiaomeng's profile"
            fill
            sizes="(max-width: 900px) 100vw, 52vw"
            style={{
              objectFit: 'contain',
              objectPosition: 'center center',
              mixBlendMode: 'multiply',
            }}
            priority
          />
        </Box>
      </Box>

      <Box sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: 'repeat(3, minmax(0, 1fr))' },
        gap: { xs: 1.6, md: 2 },
        mb: { xs: 5.5, md: 7 },
      }}>
        {proofPoints.map((item, index) => (
          <Box
            key={item.label}
            sx={{
              border: '1px solid rgba(23,21,17,0.14)',
              bgcolor: 'rgba(255,255,255,0.66)',
              p: { xs: 2.1, md: 2.35 },
              minHeight: { md: 245 },
            }}
          >
            <Typography sx={{
              color: '#9b9286',
              fontSize: '0.72rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              mb: 1.2,
            }}>
              0{index + 1} / {item.label}
            </Typography>
            <Typography sx={{
              color: '#171511',
              fontSize: { xs: '1.12rem', md: '1.2rem' },
              fontWeight: 300,
              letterSpacing: '0.03em',
              mb: 1.25,
            }}>
              {item.title}
            </Typography>
            <Typography sx={{
              color: '#655f57',
              fontSize: '0.9rem',
              lineHeight: 1.72,
              fontWeight: 300,
            }}>
              {item.body}
            </Typography>
          </Box>
        ))}
      </Box>

      <Box sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '0.82fr 1.18fr' },
        gap: { xs: 2.5, md: 6 },
        alignItems: 'start',
        borderTop: '1px solid rgba(23,21,17,0.14)',
        pt: { xs: 3, md: 4 },
      }}>
        <Box>
          <Typography sx={{
            color: '#171511',
            fontSize: { xs: '1.35rem', md: '1.6rem' },
            fontWeight: 300,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            mb: 1.4,
          }}>
            What I bring
          </Typography>
          <Typography sx={{
            color: '#655f57',
            fontSize: '0.98rem',
            lineHeight: 1.8,
            fontWeight: 300,
            maxWidth: 430,
          }}>
            I am strongest where engineering meets product judgment: making unclear workflows visible, designing useful interactions, and iterating from real user behavior.
          </Typography>
        </Box>

        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))' },
          gap: 1.2,
        }}>
          {stack.map(([label, body]) => (
            <Box
              key={label}
              sx={{
                border: '1px solid rgba(23,21,17,0.12)',
                bgcolor: 'rgba(255,255,255,0.5)',
                px: 1.6,
                py: 1.35,
              }}
            >
              <Typography sx={{
                color: '#9b9286',
                fontSize: '0.68rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                mb: 0.65,
              }}>
                {label}
              </Typography>
              <Typography sx={{
                color: '#2a251f',
                fontSize: '0.88rem',
                lineHeight: 1.55,
                fontWeight: 300,
              }}>
                {body}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
