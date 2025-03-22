import { useParams, useNavigate } from 'react-router-dom';
import '../styles/LoveLetterPage.css';

const loveLetters = {
    1: `My Dearest Love,  
     
    Everyday with you is a blessing that I always cherish. You are my rock, my inspiration, and one of the people  
    who inspires me to do my best every day. I'm so grateful to have you in my life and I will do my best to provide  
    for you, take care of you, and support you in all ways that I can. I love you so much.  
    
    Happy Anniversary, my sweetheart. Despite our arguments and shortcomings, may our love continue to grow stronger  
    and guide us through many years and challenges to come. You will always have my back through thick and thin. 
    
    Forever Yours,  
    
    Ghab.`,
    
    
    2: `To one of the strongest woman I know,  
  
    I want you to know that I am always proud of you in all ways. On how you strong you are and how 
    you handle every obstacle and hardships that comes your way. I am amazed at how brave and headstrong 
    you are when facing your battles, challenges, and fears in your life and coming out victorious.
    
    I want to remind you how much I love you and much you mean to me, and if life gets hard always remember 
    that I am here to give you the love and support you need and to remind you to rest but never to give up. You have so much 
    potential and I am excited to see you grow and achieve your dreams. I love you so much.
  
    Always and forever,  
    Ghab`,
  
    3: `To My Sweetheart,  
    Happy Anniversary lovelove ko, sobrang swerte ko dahil despite ng mga pagsubok 
    na pinagdaanan natin ay andito para tayo para sa isa't isa. Mahal na mahal kita at gusto ko ipaalala sayo 
    na hangang hanga ako sa sipag mo, tiyaga, pagiging matapang, at pagiging matibay mo. Sobrang proud ako 
    din ako dahil inuuna mo rin ang pamilya mo. 
    
    Di kakayanin ng website pag nilista ko lahat ng bagay kung bakit mahal na mahal kita HAHAHAHAH pero 
    I hope na ramdam mo yung pagmamahal ko sayo even sa mga araw na hindi tayo nagkakasundo. I'm excited 
    to see you bloom and grow more. Keep achieving your dreams one by one and I'll be cheering you sa lahat
  
    With all my love,  
    Ghab`,

    4: `To My Sweet and Tough Baby,  
    This website took me a few days to accomplish and if you are reading this ito na ang last part ng love 
    letters hehe, pero ayun di talaga kaya i-measure ng website to kung gaano kita kamahal and gaano ako 
    ka-proud sayo. I'm happy na makakapagcelebrate tayo ng first anniversary natin and gusto ko magpasalamat
    sayo for being brave and staying strong sa lahat ng tough times na napagdaanan mo and for giving me a chance 
    kaya andito tayo ngayon. 

    Nagdadasal ako na sana its still us sa dulo and magawa natin lahat ng pangarap natin para sa isa't isa, 
    sa sarili natin at sa pamilya natin. Mahal na mahal kita and if ever life gets in the way, always 
    remeber na it will be us against the world. You got me always
  
    With all my love,  
    Ghab`,
  };
  

const LoveLetterPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="love-letter-container">
      <div className="parchment">
        <p>{loveLetters[id] || "This letter is waiting to be written..."}</p>
      </div>
      <button onClick={() => navigate(-1)} className="back-button">Back to Letters</button>
    </div>
  );
};

export default LoveLetterPage;
