const getVoices = (): Promise<Array<SpeechSynthesisVoice>> =>
  new Promise((resolve) => {
    let interval: ReturnType<typeof setInterval>;

    interval = setInterval(() => {
      if (!!speechSynthesis.getVoices().length) {
        resolve(speechSynthesis.getVoices());
        clearInterval(interval);
      }
    }, 50);
  });

const getSpeach = async () => {
  const utterance = new SpeechSynthesisUtterance();

  const voices = await getVoices();
  const voice = voices.find((voice) => voice.voiceURI === 'Google US English');

  if (voice) utterance.voice = voice;

  return utterance;
};

export default getSpeach;
