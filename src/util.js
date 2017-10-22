export function randomSentence(min,max,withPeriod) {
  const l = randomInt(min||5,max||15)
  let s = randomWord()
  s = s.charAt(0).toUpperCase() + s.slice(1);
  for (let i=1;i<l;i++) {
    s += ' ' + randomWord()
  }
  return s + ((withPeriod===false)?'':'.')
}

export function randomWord() {
  const l = randomInt(3,13)

  let w = ''
  if (randomInt(0,10)>3) {
    w += randomConsonant()
  }

  for (let i=0;i<l;i++) {
    if (i%2===0) {
      w += randomVowel()
    } else {
      w += randomConsonant()
    }
  }
  return w
}

export function randomVowel() {
  const vowels = ['a','e','i','o','u']
  return vowels[randomInt(0,vowels.length)]
}

export function randomConsonant() {
  const chars = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z']
  return chars[randomInt(0,chars.length)]
}

export function randomChar() {
  const chars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  return chars[randomInt(0,chars.length)]
}

export function randomInt(min,max) {
  return Math.floor(Math.random() * (max - min)) + min
}

export function randomDate() {
  const y = randomInt(2000,2017)
  const m = randomInt(0,12)
  const d = randomInt(0,31)
  const h = randomInt(0,60)
  const mm = randomInt(0,60)
  const s = randomInt(0,60)
  return new Date(y,m,d,h,mm,s)
}

export function timeAgo(d){
  const diff = (new Date() - d)/1000;
  if(diff<60){
    const v = Math.round(diff)
    return v + ' second' + (v===1?'':'s') + ' ago';
  }
  else if(diff<60*60){
    const v = Math.round(diff/60)
    return v + ' minute' + (v===1?'':'s') + ' ago';
  }
  else if(diff<60*60*24){
    const v = Math.round(diff/(60*60))
    return v + ' hour' + (v===1?'':'s') + ' ago';
  }
  else if(diff<60*60*24*30.436875){
    const v = Math.round(diff/(60*60*24))
    return v + ' day' + (v===1?'':'s') + ' ago';
  }
  else if(diff<60*60*24*30.436875*12){
    const v = Math.round(diff/(60*60*24*30.436875))
    return v + ' month' + (v===1?'':'s') + ' ago';
  }
  const v = Math.round(diff/(60*60*24*30.436875*12))
  return v + ' year' + (v===1?'':'s') + ' ago';
}
