/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  alt: string;
  description: string;
  longDescription: string;
  details: string[];
  sizes: string[];
  isFeatured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  review: string;
  rating: number;
  role: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  alt: string;
  title?: string;
  tag?: string;
}

export interface LookbookStory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  alt: string;
  tag: string;
}
