import { useState, useEffect } from 'react';

/**
 * Custom hook for tracking scroll position and scroll direction
 * Used for navbar styling and scroll-to-top functionality
 */
export function useScroll() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if page has been scrolled more than 50px
      setScrolled(currentScrollY > 50);
      
      // Determine scroll direction
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      
      setLastScrollY(currentScrollY);
    };

    // Add scroll event listener with throttling for performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll);
    
    // Cleanup function to remove event listener
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, [lastScrollY]);

  /**
   * Smooth scroll to a specific element by ID
   * @param elementId - The ID of the element to scroll to
   */
  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      const headerOffset = 80; // Account for fixed header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  /**
   * Scroll to the top of the page smoothly
   */
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return {
    scrolled,
    scrollDirection,
    scrollToElement,
    scrollToTop,
  };
}

/**
 * Custom hook for scroll-triggered animations
 * Uses Intersection Observer API for performance
 */
export function useScrollAnimation() {
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());

  useEffect(() => {
    // Create intersection observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: '0px 0px -50px 0px' // Trigger 50px before element comes into view
      }
    );

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((element) => {
      if (element.id) {
        observer.observe(element);
      }
    });

    // Cleanup observer on unmount
    return () => {
      animatedElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  /**
   * Check if an element is visible (for conditional animation classes)
   * @param elementId - The ID of the element to check
   * @returns boolean indicating if element is visible
   */
  const isElementVisible = (elementId: string): boolean => {
    return visibleElements.has(elementId);
  };

  return {
    isElementVisible,
    visibleElements,
  };
}
