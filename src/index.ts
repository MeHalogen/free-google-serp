export async function searchGoogle(query: string): Promise<Array<{ title: string; link: string; snippet: string }>> {
  if (!query) throw new Error('Query is required');
  const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }
  });
  const html = await res.text();
  const results: Array<{ title: string; link: string; snippet: string }> = [];
  
  const regex = /<div class="egMi0 kCrYT"><a href="\/url\?q=([^&]*)[^>]*><h3[^>]*><div[^>]*>([^<]+)<\/div><\/h3>.*?<div class="BNeawe s3v9rd AP7Wnd"><div><div>([^<]+)<\/div>/g;
  let match;
  while ((match = regex.exec(html)) !== null) {
    results.push({
      link: decodeURIComponent(match[1]),
      title: match[2],
      snippet: match[3]
    });
  }

  if (results.length === 0) {
    const aRegex = /<a href="\/url\?q=([^&"]+)[^>]*><h3[^>]*>([^<]+)<\/h3>/g;
    let aMatch;
    while ((aMatch = aRegex.exec(html)) !== null) {
      results.push({
        link: decodeURIComponent(aMatch[1]),
        title: aMatch[2],
        snippet: 'Click link to view description.'
      });
    }
  }

  return results;
}