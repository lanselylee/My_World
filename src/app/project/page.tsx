'use client';

import Image from 'next/image';
import { Box, Button, Typography } from '@mui/material';
import { PlayArrow, LockOutlined } from '@mui/icons-material';

const rooms = [
  {
    name: 'Prologue video',
    text: 'An AI-made cinematic opening introduces the house, the missing person, and the first contradiction in the story.',
  },
  {
    name: 'Playable room',
    text: 'A browser-based escape room where players inspect objects, collect clues, unlock drawers, and connect memories.',
  },
  {
    name: 'Puzzle logic',
    text: 'Inventory, clue board, keypad locks, hidden messages, timed audio, branching notes, and a final reveal.',
  },
];

const roadmap = [
  'Story script and character bible',
  'Room map, props, and clue dependency graph',
  'AI video storyboard and mood frames',
  'Interactive web prototype',
  'Puzzle testing and difficulty tuning',
];

export default function ProjectPage() {
  return (
    <Box sx={{
      minHeight: '100vh',
      bgcolor: '#fffdf8',
      color: '#171511',
      position: 'relative',
      overflow: 'hidden',
      px: { xs: 2.5, sm: 5, md: 8 },
      py: { xs: 4.8, md: 8 },
      backgroundImage: `
        linear-gradient(180deg, rgba(255,253,248,0.96), rgba(246,243,235,0.96)),
        repeating-linear-gradient(90deg, rgba(20,18,16,0.025) 0, rgba(20,18,16,0.025) 1px, transparent 1px, transparent 92px)
      `,
    }}>
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '0.72fr 1.28fr' },
        gap: { xs: 3, md: 7 },
        alignItems: 'center',
        minHeight: { md: '76vh' },
        mb: { xs: 5.5, md: 7.5 },
      }}>
        <Box sx={{ maxWidth: 430, pl: { md: 1 } }}>
          <Typography sx={{
            color: '#777067',
            fontSize: '0.78rem',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            mb: 1.4,
          }}>
            Project in progress
          </Typography>

          <Typography component="h1" sx={{
            color: '#111',
            fontSize: { xs: '2.05rem', sm: '2.4rem', md: '2.85rem' },
            fontWeight: 300,
            lineHeight: 1.08,
            letterSpacing: { xs: '0.03em', md: '0.05em' },
            textTransform: 'uppercase',
            mb: { xs: 1.8, md: 2.2 },
          }}>
            Escape room
            <br />
            web game
          </Typography>

          <Typography sx={{
            color: '#5d5750',
            fontSize: { xs: '0.95rem', md: '1rem' },
            lineHeight: { xs: 1.76, md: 1.82 },
            fontWeight: 300,
            maxWidth: 410,
            mb: { xs: 2.2, md: 2.8 },
          }}>
            A browser-based horror room where story, puzzles, inventory, and AI-made video scenes unfold together. The page will grow into the playable home for this project.
          </Typography>

          <Box sx={{
            borderTop: '1px solid rgba(23,21,17,0.14)',
            pt: 1.7,
            display: 'grid',
            gap: 1.15,
            mb: { xs: 2.2, md: 2.8 },
          }}>
            {[
              ['Genre', 'survival horror / puzzle'],
              ['Format', 'web game + video story'],
              ['Next', 'script, room map, first demo'],
            ].map(([label, value]) => (
              <Box
                key={label}
                sx={{
                  display: 'grid',
                  gridTemplateColumns: '74px 1fr',
                  alignItems: 'baseline',
                  gap: 1.5,
                }}
              >
                <Typography sx={{
                  color: '#9b9286',
                  fontSize: '0.68rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                }}>
                  {label}
                </Typography>
                <Typography sx={{
                  color: '#36312b',
                  fontSize: '0.92rem',
                  lineHeight: 1.45,
                  fontWeight: 300,
                }}>
                  {value}
                </Typography>
              </Box>
            ))}
          </Box>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.1 }}>
            <Button
              variant="outlined"
              startIcon={<LockOutlined />}
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
              playable demo soon
            </Button>
            <Button
              variant="text"
              startIcon={<PlayArrow />}
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
              AI video story
            </Button>
          </Box>
        </Box>

        <Box sx={{
          position: 'relative',
          minHeight: { xs: 330, sm: 420, md: 590 },
          overflow: 'hidden',
          bgcolor: 'rgba(255,255,255,0.2)',
        }}>
          <Image
            src="/cartoon7.PNG"
            alt="Concept art for a digital horror escape room"
            fill
            sizes="(max-width: 900px) 100vw, 54vw"
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
              filter: 'saturate(0.84) contrast(1.04)',
            }}
            priority
          />
        </Box>
      </Box>

      <Box sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: 'repeat(3, minmax(0, 1fr))' },
        gap: { xs: 1.6, md: 2 },
        mb: { xs: 5, md: 7 },
      }}>
        {rooms.map((room, index) => (
          <Box
            key={room.name}
            sx={{
              border: '1px solid rgba(23,21,17,0.14)',
              bgcolor: 'rgba(255,255,255,0.66)',
              p: { xs: 2.1, md: 2.35 },
              minHeight: { md: 205 },
            }}
          >
            <Typography sx={{
              color: '#9b9286',
              fontSize: '0.74rem',
              letterSpacing: '0.18em',
              mb: 1.3,
            }}>
              0{index + 1}
            </Typography>
            <Typography sx={{
              color: '#171511',
              fontSize: { xs: '1.12rem', md: '1.18rem' },
              fontWeight: 300,
              letterSpacing: '0.03em',
              mb: 1.2,
            }}>
              {room.name}
            </Typography>
            <Typography sx={{
              color: '#655f57',
              fontSize: '0.9rem',
              lineHeight: 1.72,
              fontWeight: 300,
            }}>
              {room.text}
            </Typography>
          </Box>
        ))}
      </Box>

      <Box sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '0.8fr 1.2fr' },
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
            What I need next
          </Typography>
          <Typography sx={{
            color: '#655f57',
            fontSize: '0.98rem',
            lineHeight: 1.8,
            fontWeight: 300,
          }}>
            The script will become a design document: scene order, player goals, clue placement, puzzle dependencies, video shots, and the exact emotional curve.
          </Typography>
        </Box>

        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))' },
          gap: 1.2,
        }}>
          {roadmap.map((item) => (
            <Box
              key={item}
              sx={{
                border: '1px solid rgba(23,21,17,0.12)',
                bgcolor: 'rgba(255,255,255,0.5)',
                px: 1.6,
                py: 1.3,
              }}
            >
              <Typography sx={{
                color: '#2a251f',
                fontSize: '0.9rem',
                lineHeight: 1.5,
                fontWeight: 300,
              }}>
                {item}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
