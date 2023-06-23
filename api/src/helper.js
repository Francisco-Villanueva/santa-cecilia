function configLyric(lyric) {
    // Reemplazar los espacios al inicio de cada línea
    lyric = lyric.replace(/^\s+/gm, '');
  
    // Reemplazar los espacios al final de cada línea
    lyric = lyric.replace(/\s+$/gm, '');
  
    // Reemplazar los saltos de línea por '\n'
    lyric = lyric.replace(/\n/g, '\\n');
  
    // Retornar el string configurado
    return lyric;
  }
  
    module.exports = {configLyric};
  