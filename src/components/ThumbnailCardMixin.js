import { mapState } from 'vuex';

export default {
  props: {
    showThumbnail: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      thumbnailError: false
    };
  },
  computed: {
    ...mapState(['cardViewMode', 'crossOriginMedia']),
    isList() {
      return this.data && !this.data.isItem() && this.cardViewMode === 'list';
    },
    hasImage() {
      return this.showThumbnail && this.thumbnail;
    },
    thumbnail() {
      if (this.data) {
        let thumbnails = this.data.getThumbnails(true, 'thumbnail');
        if (thumbnails.length > 0) {
          let t = thumbnails[0];
          let width, height;
          if (Array.isArray(t['proj:shape']) && t['proj:shape'].length === 2) {
            [height, width] = t['proj:shape'];
          }
          return {
            src: this.thumbnailError ? '/img.svg' : t.href,
            alt: t.title,
            crossorigin: this.crossOriginMedia,
            right: this.isList,
            blankSrc: '/img.svg',
            blankColor: "rgba(0, 0, 0, 0.125)",
            width,
            height
          };
        }
      }
      return null;
    }
  },
  methods: {
    handleImgError() {
      this.thumbnailError = true;
    }
  }
};