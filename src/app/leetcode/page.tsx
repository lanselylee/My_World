'use client';

import { Box, Container, Typography, Card, CardContent } from '@mui/material';
import { Code, TrendingUp, Star } from '@mui/icons-material';
import { useEffect, useState } from 'react';

export default function LeetCodePage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Box sx={{
      minHeight: '100vh',
      background: `
        radial-gradient(circle at 30% 70%, rgba(245, 245, 245, 0.3) 0%, transparent 50%),
        radial-gradient(circle at 70% 30%, rgba(250, 250, 250, 0.4) 0%, transparent 50%),
        linear-gradient(135deg, #ffffff 0%, #fafafa 100%)
      `,
      position: 'relative',
      overflow: 'hidden',
      py: 8
    }}>
      {/* 🔢 Floating Geometric Elements */}
      <Box sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden'
      }}>
        {/* Floating circles */}
        {Array.from({ length: 8 }).map((_, i) => (
          <Box
            key={`circle-${i}`}
            sx={{
              position: 'absolute',
              left: `${(i * 12 + 5) % 90}%`,
              top: `${(i * 15 + 10) % 80}%`,
              width: `${60 + (i % 3) * 20}px`,
              height: `${60 + (i % 3) * 20}px`,
              borderRadius: '50%',
              background: `linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.05) 100%)`,
              border: `1px solid rgba(99, 102, 241, 0.2)`,
              animation: `floatCircle ${10 + (i % 3) * 2}s ease-in-out infinite`,
              animationDelay: `${i * 0.8}s`,
              '@keyframes floatCircle': {
                '0%, 100%': {
                  transform: 'translateY(0px) translateX(0px) scale(1)',
                  opacity: 0.6
                },
                '50%': {
                  transform: `translateY(-${20 + i * 5}px) translateX(${10 - i * 2}px) scale(1.1)`,
                  opacity: 0.8
                }
              }
            }}
          />
        ))}
        
        {/* Floating code symbols */}
        {Array.from({ length: 10 }).map((_, i) => (
          <Box
            key={`symbol-${i}`}
            sx={{
              position: 'absolute',
              left: `${(i * 9 + 8) % 85}%`,
              top: `${(i * 12 + 15) % 75}%`,
              fontSize: { xs: '16px', md: '20px' },
              fontFamily: 'Monaco, Menlo, monospace',
              color: `rgba(75, 85, 99, ${0.3 + (i % 3) * 0.1})`,
              fontWeight: 500,
              animation: `symbolFloat ${8 + (i % 4) * 2}s ease-in-out infinite`,
              animationDelay: `${i * 0.6}s`,
              '@keyframes symbolFloat': {
                '0%, 100%': {
                  transform: 'translateY(0px) rotate(0deg)',
                  opacity: 0.4
                },
                '50%': {
                  transform: `translateY(-${15 + i * 3}px) rotate(${5 - i}deg)`,
                  opacity: 0.7
                }
              }
            }}
          >
            {['{}', '[]', '()', '=>', '&&', '||', '++', '--', '??', '::'][i % 10]}
          </Box>
        ))}
      </Box>

      {/* ✨ Subtle Floating Code Snippets */}
      <Box sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1
      }}>
        {/* Floating algorithm keywords */}
        {isClient && Array.from({ length: 6 }).map((_, i) => (
          <Box
            key={`keyword-${i}`}
            sx={{
              position: 'absolute',
              left: `${(i * 16 + 10) % 80}%`,
              top: `${(i * 20 + 20) % 60}%`,
              fontSize: { xs: '11px', md: '13px' },
              fontFamily: 'Monaco, Menlo, Consolas, monospace',
              color: `rgba(107, 114, 128, ${0.4 + (i % 2) * 0.2})`,
              whiteSpace: 'nowrap',
              fontWeight: 400,
              padding: '4px 8px',
              background: 'rgba(249, 250, 251, 0.8)',
              borderRadius: '12px',
              border: '1px solid rgba(209, 213, 219, 0.5)',
              animation: `gentleFloat ${12 + (i % 3) * 3}s ease-in-out infinite`,
              animationDelay: `${i * 2}s`,
              '@keyframes gentleFloat': {
                '0%, 100%': {
                  transform: 'translateY(0px) translateX(0px)',
                  opacity: 0.6
                },
                '50%': {
                  transform: `translateY(-${8 + i * 2}px) translateX(${3 - i}px)`,
                  opacity: 0.9
                }
              }
            }}
          >
            {[
              'O(log n)',
              'Binary Search',
              'Dynamic Programming', 
              'BFS',
              'DFS',
              'Two Pointers'
            ][i % 6]}
          </Box>
        ))}
        
        {/* Floating geometric shapes */}
        {isClient && Array.from({ length: 8 }).map((_, i) => (
          <Box
            key={`shape-${i}`}
            sx={{
              position: 'absolute',
              left: `${(i * 11 + 15) % 85}%`,
              top: `${(i * 18 + 25) % 70}%`,
              width: `${12 + (i % 2) * 4}px`,
              height: `${12 + (i % 2) * 4}px`,
              borderRadius: i % 3 === 0 ? '50%' : '2px',
              background: `rgba(${i % 2 === 0 ? '99, 102, 241' : '139, 92, 246'}, 0.15)`,
              border: `1px solid rgba(${i % 2 === 0 ? '99, 102, 241' : '139, 92, 246'}, 0.3)`,
              animation: `shapeFloat ${10 + (i % 4) * 2}s ease-in-out infinite`,
              animationDelay: `${i * 1.5}s`,
              '@keyframes shapeFloat': {
                '0%, 100%': {
                  transform: 'translateY(0px) rotate(0deg)',
                  opacity: 0.5
                },
                '50%': {
                  transform: `translateY(-${12 + i * 2}px) rotate(${45 * (i % 2 === 0 ? 1 : -1)}deg)`,
                  opacity: 0.8
                }
              }
            }}
          />
        ))}
      </Box>

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
        {/* 页面标题 */}
        <Typography
          variant="h2"
          component="h1"
          sx={{
            textAlign: 'center',
            fontWeight: 300,
            fontSize: { xs: '2.5rem', md: '3.5rem' },
            color: '#2c2c2c',
            letterSpacing: '0.05em',
            mb: 2,
            fontFamily: '"Inter", "Helvetica", sans-serif'
          }}
        >
          LeetCode Journey
        </Typography>

        {/* 副标题 */}
        <Typography
          variant="h6"
          sx={{
            textAlign: 'center',
            color: '#6c6c6c',
            fontWeight: 300,
            mb: 8,
            fontSize: { xs: '1rem', md: '1.1rem' }
          }}
        >
          My coding adventure and problem-solving journey 💻
        </Typography>

        {/* 统计卡片 */}
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
          gap: 4,
          mb: 8 
        }}>
          <Card sx={{
            height: '200px',
            borderRadius: '16px',
            background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
            color: '#1e293b',
            border: '1px solid rgba(226, 232, 240, 0.8)',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08), 0 1px 4px rgba(0, 0, 0, 0.04)',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08)',
              border: '1px solid rgba(99, 102, 241, 0.3)'
            }
          }}>
            <CardContent sx={{ 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'center', 
              alignItems: 'center' 
            }}>
              <Code sx={{ fontSize: '3rem', mb: 2, color: '#6366f1' }} />
              <Typography variant="h4" sx={{ fontWeight: 600, mb: 1, color: '#1e293b' }}>
                150+
              </Typography>
              <Typography variant="body1" sx={{ textAlign: 'center', color: '#64748b' }}>
                Problems Solved
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{
            height: '200px',
            borderRadius: '16px',
            background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
            color: '#1e293b',
            border: '1px solid rgba(226, 232, 240, 0.8)',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08), 0 1px 4px rgba(0, 0, 0, 0.04)',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08)',
              border: '1px solid rgba(236, 72, 153, 0.3)'
            }
          }}>
            <CardContent sx={{ 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'center', 
              alignItems: 'center' 
            }}>
              <TrendingUp sx={{ fontSize: '3rem', mb: 2, color: '#ec4899' }} />
              <Typography variant="h4" sx={{ fontWeight: 600, mb: 1, color: '#1e293b' }}>
                Medium
              </Typography>
              <Typography variant="body1" sx={{ textAlign: 'center', color: '#64748b' }}>
                Current Level
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{
            height: '200px',
            borderRadius: '16px',
            background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
            color: '#1e293b',
            border: '1px solid rgba(226, 232, 240, 0.8)',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08), 0 1px 4px rgba(0, 0, 0, 0.04)',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08)',
              border: '1px solid rgba(14, 165, 233, 0.3)'
            }
          }}>
            <CardContent sx={{ 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'center', 
              alignItems: 'center' 
            }}>
              <Star sx={{ fontSize: '3rem', mb: 2, color: '#0ea5e9' }} />
              <Typography variant="h4" sx={{ fontWeight: 600, mb: 1, color: '#1e293b' }}>
                6 Months
              </Typography>
              <Typography variant="body1" sx={{ textAlign: 'center', color: '#64748b' }}>
                Journey Started
              </Typography>
            </CardContent>
          </Card>
        </Box>

        {/* 内容区域 */}
        <Box sx={{
          background: 'rgba(255, 255, 255, 0.9)',
          border: '1px solid rgba(226, 232, 240, 0.8)',
          borderRadius: '20px',
          padding: 4,
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08), 0 1px 4px rgba(0, 0, 0, 0.04)',
          backdropFilter: 'blur(15px)'
        }}>
          <Typography variant="h4" sx={{ 
            color: '#1e293b', 
            fontWeight: 500, 
            mb: 3,
            textAlign: 'center'
          }}>
            My Coding Philosophy
          </Typography>
          
          <Typography variant="body1" sx={{ 
            color: '#475569', 
            lineHeight: 1.8,
            fontSize: '1.1rem',
            textAlign: 'center',
            maxWidth: '800px',
            mx: 'auto'
          }}>
            Every problem is a puzzle waiting to be solved. Through LeetCode, I've learned that 
            persistence and practice are the keys to mastering algorithms and data structures. 
            Each solution teaches me something new about efficiency, elegance, and the art of coding.
          </Typography>

          <Box sx={{ mt: 4, textAlign: 'center' }}>
            <Typography variant="h5" sx={{ 
              color: '#374151', 
              fontWeight: 500, 
              mb: 2
            }}>
              Current Focus Areas
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              justifyContent: 'center', 
              gap: 2 
            }}>
              {['Dynamic Programming', 'Tree Traversal', 'Graph Algorithms', 'Binary Search'].map((topic, index) => (
                <Box key={topic} sx={{
                  background: `linear-gradient(135deg, ${
                    index % 4 === 0 ? '#6366f1' : 
                    index % 4 === 1 ? '#ec4899' : 
                    index % 4 === 2 ? '#0ea5e9' : '#10b981'
                  } 0%, ${
                    index % 4 === 0 ? '#8b5cf6' : 
                    index % 4 === 1 ? '#f472b6' : 
                    index % 4 === 2 ? '#38bdf8' : '#34d399'
                  } 100%)`,
                  color: '#ffffff',
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
                  }
                }}>
                  {topic}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
