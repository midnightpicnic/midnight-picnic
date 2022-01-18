wp.domReady(() => {
  // wp.blocks.getBlockTypes().forEach( function( blockType ){ console.log( blockType.name ); }); 

  
  // Unregister Block Types
  /*wp.blocks.unregisterBlockType(
    'core/quote'
  );*/
  /*wp.blocks.unregisterBlockType(
    'core/shortcode'
  );*/
  /*wp.blocks.unregisterBlockType(
    'core/archives'
  );*/
  /*wp.blocks.unregisterBlockType(
    'core/audio'
  );*/
  /*wp.blocks.unregisterBlockType(
    'core/calendar'
  );*/
  /*wp.blocks.unregisterBlockType(
    'core/categories'
  );*/
  /*wp.blocks.unregisterBlockType(
    'core/code'
  );*/
  /*wp.blocks.unregisterBlockType(
    'core/embed'
  );*/
  /*wp.blocks.unregisterBlockType(
    'core/file'
  );*/
  /*wp.blocks.unregisterBlockType(
    'core/gallery'
  );*/
  /*wp.blocks.unregisterBlockType(
    'core/freeform'
  );*/
  /*wp.blocks.unregisterBlockType(
    'core/html'
  );*/
  /*wp.blocks.unregisterBlockType(
    'core/latest-comments'
  );*/
  /*wp.blocks.unregisterBlockType(
    'core/latest-posts'
  );*/
  /*wp.blocks.unregisterBlockType(
    'core/missing'
  );*/
  /*wp.blocks.unregisterBlockType(
    'core/more'
  );*/
  /*wp.blocks.unregisterBlockType(
    'core/nextpage'
  );*/
  /*wp.blocks.unregisterBlockType(
    'core/page-list'
  );*/
  /*wp.blocks.unregisterBlockType(
    'core/preformatted'
  );*/
  /*wp.blocks.unregisterBlockType(
    'core/pullquote'
  );*/
  /*wp.blocks.unregisterBlockType(
    'core/rss'
  );*/
  /*wp.blocks.unregisterBlockType(
    'core/search'
  );*/
  /*wp.blocks.unregisterBlockType(
    'core/table'
  );*/
  /*wp.blocks.unregisterBlockType(
    'core/tag-cloud'
  );*/
  /*wp.blocks.unregisterBlockType(
    'core/verse'
  );*/
  /*wp.blocks.unregisterBlockType(
    'core/site-tagline'
  );*/
  /*wp.blocks.unregisterBlockType(
    'core/site-title'
  );*/
  /*wp.blocks.unregisterBlockType(
    'core/query'
  );*/
  /*wp.blocks.unregisterBlockType(
    'core/post-template'
  );*/
  /*wp.blocks.unregisterBlockType(
    'core/query-title'
  );*/
  /*wp.blocks.unregisterBlockType(
    'core/query-pagination'
  );*/
  /*wp.blocks.unregisterBlockType(
    'core/query-pagination-next'
  );*/
  /*wp.blocks.unregisterBlockType(
    'core/query-pagination-numbers'
  );*/
  /*wp.blocks.unregisterBlockType(
    'core/query-pagination-previous'
  );*/
  /*wp.blocks.unregisterBlockType(
    'core/post-title'
  );*/
  /*wp.blocks.unregisterBlockType(
    'core/post-content'
  );*/
  /*wp.blocks.unregisterBlockType(
    'core/post-date'
  );*/
  /*wp.blocks.unregisterBlockType(
    'core/post-excerpt'
  );*/
  /*wp.blocks.unregisterBlockType(
    'core/post-featured-image'
  );*/
  /*wp.blocks.unregisterBlockType(
    'core/post-terms'
  );*/
  /*wp.blocks.unregisterBlockType(
    'core/loginout'
  );*/
  /*wp.blocks.unregisterBlockType(
    'core/social-links'
  );*/
  /*wp.blocks.unregisterBlockType(
    'core/social-link'
  );*/
  /*wp.blocks.unregisterBlockType(
    'core/video'
  );*/
  /*wp.blocks.unregisterBlockType(
    'core/site-logo'
  );*/


  // Unregister Block Styles

  // Unregister buttons
  wp.blocks.unregisterBlockStyle(
    'core/button',
    ['default', 'outline', 'squared', 'fill']
  );

  // Register custom buttons
  wp.blocks.registerBlockStyle(
    'core/button',
    [
      {
        name: 'primary',
        label: 'Primary',
        isDefault: true,
      },
    ]
  );

  // Unregister quote style
  wp.blocks.unregisterBlockStyle(
    'core/quote',
    ['large']
  );

  // Unregister pullquote style
  wp.blocks.unregisterBlockStyle(
    'core/pullquote',
    ['solid-color']
  );

  // Unregister table style
  wp.blocks.unregisterBlockStyle(
    'core/table',
    ['stripes']
  );

  // Unregister image style
  wp.blocks.unregisterBlockStyle(
    'core/image',
    ['rounded']
  );

  // Unregister separator style
  wp.blocks.unregisterBlockStyle(
    'core/separator',
    ['wide-line']
  );

  // Unregister site logo style
  wp.blocks.unregisterBlockStyle(
    'core/site-logo',
    ['rounded']
  );

  // Unregister social links style
  wp.blocks.unregisterBlockStyle(
    'core/social-links',
    ['default', 'pill-shape', 'logos-only']
  );

  // Register image style
  wp.blocks.registerBlockStyle(
    'core/image',
    [
      {
        name: 'overflow',
        label: 'Overflow Image',
      },
    ]
  );

  // Register group style
  wp.blocks.registerBlockStyle(
    'core/group',
    [
      {
        name: 'card',
        label: 'Card Fill',
      },
      {
        name: 'card-outline',
        label: 'Card Outline',
      },
    ]
  );
});