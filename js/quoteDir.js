angular.module('letsTrek').directive('quoteGenerator', function(){
  return {
    template: '{{ randomQuote }}',
    link: function(scope, elem, attr){
      var quotes = ["My Friend Left The Beaten Path To Go And Explore The Forest. She Left A Trail Behind Her.", "I Took My Pet Yogi Hiking Today. Bear With Me On This One.", "Have You Heard The Story About The Hill? I Couldn’t Get Over It.", ' When The Queen’s Husband Got To The Top Of Kilimanjaro, He Was High King.', "My Mate Was Annoying Me On Our Camping Trip So I Told Him To Take A Hike.", "I Bought A New Pair Of Hiking Boots From A Drug Dealer. I’m Not Sure What He Laced Them With But I’ve Been Tripping All Day.", "Really The Difference Between Hill And Hell Is Just A Fine Line.", "I Came Across Two Talking Stones While I Was Out Hiking. One Was Big But Shy. The Other Was A Little Boulder.", "If My Friends Ask My Plans For Today’s Hike, I’ll Summit Up Nicely.", "I Was Annoyed When My Mate Turned Up For A Hike With Two Left Hiking Shoes. I Had To Give Him A Right Boot."]
      scope.randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    }
  }
})
