"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AppBar, Toolbar, Button, Box } from '@mui/material';

export default function NavBar() {
  const pathname = usePathname();
  
  const items = [
    { href: "/", label: "Home" },
    { href: "/my-work", label: "Work" },
    { href: "/project", label: "Project" },
    { href: "/about", label: "About" },
  ];

  // 🎨 根据页面路径动态获取主题配色
  const getPageTheme = () => {
    switch (pathname) {
      case '/':
        // 首页 - 白色简约主题
        return {
          navBg: 'rgba(255, 255, 255, 0.95)',
          borderColor: '#ecf0f1',
          activeColor: '#2c3e50',
          inactiveColor: '#7f8c8d',
          hoverBg: 'rgba(0,0,0,0.02)',
          backdrop: 'blur(10px)'
        };
      case '/my-work':
        // Profile/My Work - 绿色自然主题 (配合叶子动画)
        return {
          navBg: 'rgba(248, 250, 252, 0.9)',
          borderColor: 'rgba(134, 186, 134, 0.3)',
          activeColor: '#2d5a2d',
          inactiveColor: '#6b8e6b',
          hoverBg: 'rgba(134, 186, 134, 0.1)',
          backdrop: 'blur(12px)'
        };
      case '/about':
        // About - 白色简约主题 (配合白色背景)
        return {
          navBg: 'rgba(255, 255, 255, 0.95)',
          borderColor: '#ecf0f1',
          activeColor: '#2c3e50',
          inactiveColor: '#7f8c8d',
          hoverBg: 'rgba(0,0,0,0.02)',
          backdrop: 'blur(10px)'
        };
      case '/project':
        return {
          navBg: 'rgba(253, 252, 249, 0.92)',
          borderColor: 'rgba(36, 33, 28, 0.16)',
          activeColor: '#1f1d19',
          inactiveColor: '#6b665d',
          hoverBg: 'rgba(36, 33, 28, 0.06)',
          backdrop: 'blur(10px)'
        };
      default:
        // 默认主题
        return {
          navBg: 'rgba(255, 255, 255, 0.95)',
          borderColor: '#ecf0f1',
          activeColor: '#2c3e50',
          inactiveColor: '#7f8c8d',
          hoverBg: 'rgba(0,0,0,0.02)',
          backdrop: 'blur(10px)'
        };
    }
  };

  const pageTheme = getPageTheme();

  // The homepage room has its own Case Index navigation.
  if (pathname === '/') return null;

  return (
    <AppBar 
      position="static" 
      elevation={0}
      sx={{ 
        bgcolor: pageTheme.navBg,
        backdropFilter: pageTheme.backdrop, // 毛玻璃效果
        borderBottom: '1px solid',
        borderColor: pageTheme.borderColor,
        position: 'relative',
        zIndex: 10,
        transition: 'all 0.3s ease', // 平滑过渡动画
        // 增加微妙的阴影效果
        boxShadow: pathname === '/about' 
          ? '0 2px 8px rgba(0,0,0,0.3)' 
          : '0 2px 8px rgba(0,0,0,0.04)'
      }}
    >
      <Toolbar sx={{ justifyContent: 'center', py: 2 }}>
        <Box sx={{
          display: 'flex',
          gap: { xs: 0.25, sm: 1.5, md: 3 },
          flexWrap: 'nowrap',
          justifyContent: 'center',
          overflowX: 'auto',
          maxWidth: '100%',
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': { display: 'none' }
        }}>
          {items.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Button
                key={item.href}
                component={Link}
                href={item.href}
                variant="text"
                size="medium"
                sx={{
                  color: isActive ? pageTheme.activeColor : pageTheme.inactiveColor,
                  fontWeight: isActive ? 500 : 400,
                  fontSize: { xs: '0.82rem', sm: '0.9rem', md: '0.95rem' },
                  textTransform: 'none',
                  minWidth: 'auto',
                  px: { xs: 0.95, sm: 2, md: 3 },
                  py: 1,
                  borderRadius: '6px',
                  fontFamily: '"Inter", "Helvetica", sans-serif',
                  position: 'relative',
                  // 活跃状态的特殊效果
                  ...(isActive && {
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: '-8px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '20px',
                      height: '2px',
                      bgcolor: pageTheme.activeColor,
                      borderRadius: '1px',
                      opacity: 0.8
                    }
                  }),
                  '&:hover': {
                    bgcolor: pageTheme.hoverBg,
                    color: pageTheme.activeColor,
                    transform: 'translateY(-1px)', // 微妙的悬停上浮
                  },
                  transition: 'all 0.2s ease'
                }}
              >
                {item.label}
              </Button>
            );
          })}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
