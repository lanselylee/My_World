'use client';

import Image from 'next/image';
import { Box, Typography } from '@mui/material';

const chapters = [
  {
    label: '01',
    title: 'AI testing systems',
    body: 'At TestSprite, I work on AI-powered testing workflows, MCP integrations, report generation, collaboration features, and product analytics for developer-facing QA systems.',
  },
  {
    label: '02',
    title: 'Agentic software',
    body: 'I build with Python, TypeScript, React, Next.js, AWS Lambda, browser-use, Claude Code, and OpenAI Codex, with a focus on tools that make messy workflows observable and repeatable.',
  },
  {
    label: '03',
    title: 'Horror game worlds',
    body: 'Before software became my main language, I spent two years in Beijing creating original horror escape-room themes, designing player experiences, producing room games, and helping market a venue that reached national hot rankings and became No. 1 in Beijing.',
  },
];

const fragments = [
  ['Study', 'Northeastern University · M.S. Computer Science'],
  ['Work', 'AI testing startup · developer tools'],
  ['Build', 'React · Next.js · Python · Java · AWS'],
  ['Create', 'Original horror themes · puzzle flow · market storytelling'],
];

export default function MyWorkPage() {
  return (
    <Box sx={{
      minHeight: '100vh',
      bgcolor: '#fffefe',
      position: 'relative',
      overflow: 'hidden',
      px: { xs: 2.5, sm: 5, md: 8 },
      py: { xs: 6, md: 8 },
    }}>
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '0.86fr 1.14fr' },
        gap: { xs: 4, md: 8 },
        alignItems: 'center',
        minHeight: { md: 'calc(100vh - 250px)' },
      }}>
        <Box sx={{
          position: 'relative',
          minHeight: { xs: 330, md: 560 },
          order: { xs: 2, md: 1 },
          mt: { xs: -2, md: 0 },
        }}>
          <Image
            src="/cartoon2.PNG"
            alt="Xiaomeng illustration"
            fill
            sizes="(max-width: 900px) 100vw, 48vw"
            style={{
              objectFit: 'contain',
              objectPosition: 'center bottom',
              mixBlendMode: 'multiply',
            }}
            priority
          />
        </Box>

        <Box sx={{
          order: { xs: 1, md: 2 },
          maxWidth: 660,
          mx: { xs: 'auto', md: 0 },
          textAlign: { xs: 'center', md: 'left' },
          pt: { md: 2 },
        }}>
          <Typography sx={{
            color: '#777',
            fontSize: '0.78rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            mb: 1.6,
            fontWeight: 400,
          }}>
            About the builder
          </Typography>

          <Typography sx={{
            color: '#111',
            fontSize: { xs: '2rem', md: '3.05rem' },
            fontWeight: 300,
            lineHeight: 1.18,
            letterSpacing: { xs: '0.04em', md: '0.08em' },
            textTransform: 'uppercase',
            mb: { xs: 2.2, md: 2.8 },
          }}>
            Code, stories
            <br />
            and systems
          </Typography>

          <Typography sx={{
            color: '#666',
            fontSize: { xs: '0.98rem', md: '1.03rem' },
            lineHeight: 1.82,
            fontWeight: 300,
            maxWidth: 590,
            mb: { xs: 3.5, md: 4 },
            mx: { xs: 'auto', md: 0 },
          }}>
            I design systems for people to move through: software workflows, AI testing tools, story rooms, and small learning worlds. Before becoming a software engineer in training, I spent two years building original horror escape-room experiences in Beijing.
          </Typography>

          <Box sx={{
            display: { xs: 'none', md: 'grid' },
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))' },
            gap: { xs: 1.2, md: 1.4 },
            maxWidth: 620,
          }}>
            {fragments.map(([label, fragment]) => (
              <Box
                key={label}
                sx={{
                  border: '1px solid rgba(17,17,17,0.12)',
                  bgcolor: 'rgba(255,255,255,0.72)',
                  p: { xs: 1.5, md: 1.7 },
                  minHeight: 92,
                }}
              >
                <Typography sx={{
                  color: '#999',
                  fontSize: '0.72rem',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  mb: 0.9,
                }}>
                  {label}
                </Typography>
                <Typography sx={{
                  color: '#222',
                  fontSize: '0.86rem',
                  lineHeight: 1.55,
                  fontWeight: 300,
                }}>
                  {fragment}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <Box sx={{
        display: { xs: 'grid', md: 'none' },
        gridTemplateColumns: '1fr',
        gap: 1.2,
        mt: -2,
        mb: 5,
      }}>
        {fragments.map(([label, fragment]) => (
          <Box
            key={label}
            sx={{
              border: '1px solid rgba(17,17,17,0.12)',
              bgcolor: 'rgba(255,255,255,0.72)',
              p: 1.5,
              textAlign: 'center',
            }}
          >
            <Typography sx={{
              color: '#999',
              fontSize: '0.72rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              mb: 0.9,
            }}>
              {label}
            </Typography>
            <Typography sx={{
              color: '#222',
              fontSize: '0.86rem',
              lineHeight: 1.55,
              fontWeight: 300,
            }}>
              {fragment}
            </Typography>
          </Box>
        ))}
      </Box>

      <Box sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: 'repeat(3, minmax(0, 1fr))' },
        gap: { xs: 2, md: 2.2 },
        mt: { xs: 5, md: 7 },
        pb: { xs: 4, md: 2 },
      }}>
        {chapters.map((chapter) => (
          <Box
            key={chapter.label}
            sx={{
              border: '1px solid rgba(17,17,17,0.12)',
              bgcolor: 'rgba(255,255,255,0.78)',
              p: { xs: 2.2, md: 2.6 },
              minHeight: { md: 275 },
            }}
          >
            <Typography sx={{
              color: '#999',
              fontSize: '0.76rem',
              letterSpacing: '0.16em',
              mb: 1.2,
            }}>
              {chapter.label}
            </Typography>
            <Typography sx={{
              color: '#111',
              fontSize: { xs: '1.2rem', md: '1.28rem' },
              fontWeight: 300,
              letterSpacing: '0.03em',
              mb: 1.4,
            }}>
              {chapter.title}
            </Typography>
            <Typography sx={{
              color: '#666',
              fontSize: '0.93rem',
              lineHeight: 1.78,
              fontWeight: 300,
            }}>
              {chapter.body}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
