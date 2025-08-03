'use client';
// components/CircleAnimation.jsx
// components/CircleAnimation.jsx
import React, { useState, useRef, useEffect } from 'react';
import styles from './Projects.module.css';

const Projects = () => {
  const [iconsVisible, setIconsVisible] = useState(false);
  const smallCirclesRef = useRef([]);
  const centerCircleRef = useRef(null);
  
  // Bootstrap Icons classes with tooltip text
  const icons = [
    { class: 'bi-github', text: 'GitHub Repository' },
    { class: 'bi-twitter', text: 'Twitter Profile' },
    { class: 'bi-linkedin', text: 'LinkedIn Network' },
    { class: 'bi-instagram', text: 'Instagram Feed' },
    { class: 'bi-facebook', text: 'Facebook Page' },
    { class: 'bi-youtube', text: 'YouTube Channel' },
    { class: 'bi-pinterest', text: 'Pinterest Board' },
    { class: 'bi-envelope', text: 'Contact Email' }
  ];
  
  // useEffect to handle hover effect for center circle
  useEffect(() => {
    const centerCircle = centerCircleRef.current;
    
    const handleMouseEnter = () => {
      setIconsVisible(true);
    };
    
    const handleMouseLeave = () => {
      setIconsVisible(false);
    };
    
    if (centerCircle) {
      centerCircle.addEventListener('mouseenter', handleMouseEnter);
      centerCircle.addEventListener('mouseleave', handleMouseLeave);
    }
    
    return () => {
      if (centerCircle) {
        centerCircle.removeEventListener('mouseenter', handleMouseEnter);
        centerCircle.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);
  
  // useEffect to handle staggered animation
  useEffect(() => {
    if (iconsVisible) {
      // Small delay to ensure DOM is updated
      setTimeout(() => {
        smallCirclesRef.current.forEach((circle, index) => {
          if (circle) {
            setTimeout(() => {
              circle.style.opacity = '1';
              circle.style.transform = 'scale(1)';
            }, index * 150);
          }
        });
      }, 50);
    } else {
      // Reset animation when hiding
      smallCirclesRef.current.forEach(circle => {
        if (circle) {
          circle.style.opacity = '0';
          circle.style.transform = 'scale(0)';
        }
      });
    }
  }, [iconsVisible]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Our Services</h1>
      
      <div 
        ref={centerCircleRef}
        className={`${styles.centerCircle} ${iconsVisible ? '' : styles.pulse}`}
      >
        <span style={{textAlign:"center"}}>{iconsVisible ? 'Complaince Consulting Audit &  Testing' : 'Managed IT Services'}</span>
      </div>
      
      {iconsVisible && (
        <>
          {icons.map((icon, index) => {
            const angle = (index / icons.length) * 2 * Math.PI;
            const radius = 230;
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);
            
            // Determine tooltip position based on circle position
            let tooltipPosition = 'right';
            let tooltipTransform = 'translateY(-50%)';
            
            // Right side (3 o'clock position)
            if (angle === 0 || Math.abs(angle - 0) < 0.3 || Math.abs(angle - 2 * Math.PI) < 0.3) {
              tooltipPosition = 'right';
              tooltipTransform = 'translateY(-50%)';
            }
            // Left side (9 o'clock position)
            else if (Math.abs(angle - Math.PI) < 0.3) {
              tooltipPosition = 'left';
              tooltipTransform = 'translateY(-50%)';
            }
            // Top side (12 o'clock position)
            else if (Math.abs(angle - Math.PI/2) < 0.3) {
              tooltipPosition = 'right';
              tooltipTransform = 'translateY(-50%)';
            }
            // Bottom side (6 o'clock position)
            else if (Math.abs(angle - 3*Math.PI/2) < 0.3) {
              tooltipPosition = 'right';
              tooltipTransform = 'translateY(-50%)';
            }
            // Top-right quadrant
            else if (angle > 0 && angle < Math.PI/2) {
              tooltipPosition = 'right';
              tooltipTransform = 'translateY(-50%)';
            }
            // Bottom-right quadrant
            else if (angle > 3*Math.PI/2 && angle < 2*Math.PI) {
              tooltipPosition = 'right';
              tooltipTransform = 'translateY(-50%)';
            }
            // Bottom-left quadrant
            else if (angle > Math.PI && angle < 3*Math.PI/2) {
              tooltipPosition = 'right';
              tooltipTransform = 'translateY(-50%)';
            }
            // Top-left quadrant
            else if (angle > Math.PI/2 && angle < Math.PI) {
              tooltipPosition = 'left';
              tooltipTransform = 'translateY(-50%)';
            }
            
            return (
              <div
                key={index}
                ref={el => smallCirclesRef.current[index] = el}
                className={styles.smallCircle}
                style={{
                  left: `calc(50% + ${x}px - 30px)`,
                  top: `calc(50% + ${y}px - 30px)`,
                  opacity: 0,
                  transform: 'scale(0)',
                  transition: 'opacity 0.5s ease, transform 0.5s ease'
                }}
              >
                <i className={`bi ${icon.class}`}></i>
                <div 
                  className={`${styles.tooltip} ${styles[`tooltip-${tooltipPosition}`]}`}
                  style={{ transform: tooltipTransform }}
                >
                  {icon.text}
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default Projects;