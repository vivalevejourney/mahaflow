import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Heart,
  MessageCircle,
  Share2,
  MoreHorizontal,
  Image as ImageIcon,
  Send,
  Smile,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/layout/WhatsAppButton';
import { feedPosts, mockUsers, formatRelativeTime } from '@/data/mockData';
import { cn } from '@/lib/utils';

const Feed = () => {
  const [posts, setPosts] = useState(feedPosts);
  const [newPostContent, setNewPostContent] = useState('');
  const [likedPosts, setLikedPosts] = useState<string[]>([]);

  const handleLike = (postId: string) => {
    if (likedPosts.includes(postId)) {
      setLikedPosts(likedPosts.filter((id) => id !== postId));
      setPosts(posts.map((p) => (p.id === postId ? { ...p, likes: p.likes - 1 } : p)));
    } else {
      setLikedPosts([...likedPosts, postId]);
      setPosts(posts.map((p) => (p.id === postId ? { ...p, likes: p.likes + 1 } : p)));
    }
  };

  const handleSubmitPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPostContent.trim()) return;

    const newPost = {
      id: Date.now().toString(),
      user: mockUsers[0],
      content: newPostContent,
      likes: 0,
      comments: 0,
      createdAt: new Date().toISOString(),
    };

    setPosts([newPost, ...posts]);
    setNewPostContent('');
  };

  return (
    <div className="min-h-screen bg-secondary/30">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Comunidade Mahaflow
              </h1>
              <p className="text-muted-foreground">
                Compartilhe suas experiências e conecte-se com outros aventureiros
              </p>
            </div>

            {/* Create Post */}
            <div className="bg-card rounded-2xl border border-border p-6 mb-8">
              <form onSubmit={handleSubmitPost}>
                <div className="flex gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={mockUsers[0].avatar} alt={mockUsers[0].name} />
                    <AvatarFallback>{mockUsers[0].name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <Textarea
                      placeholder="Compartilhe sua experiência..."
                      value={newPostContent}
                      onChange={(e) => setNewPostContent(e.target.value)}
                      className="resize-none border-0 p-0 focus-visible:ring-0 text-foreground placeholder:text-muted-foreground"
                      rows={3}
                    />
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                      <div className="flex gap-2">
                        <Button type="button" variant="ghost" size="icon" className="text-muted-foreground">
                          <ImageIcon size={20} />
                        </Button>
                        <Button type="button" variant="ghost" size="icon" className="text-muted-foreground">
                          <Smile size={20} />
                        </Button>
                      </div>
                      <Button type="submit" disabled={!newPostContent.trim()}>
                        <Send size={16} className="mr-2" />
                        Publicar
                      </Button>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            {/* Posts Feed */}
            <div className="space-y-6">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="bg-card rounded-2xl border border-border overflow-hidden animate-fade-in"
                >
                  {/* Post Header */}
                  <div className="p-4 flex items-center justify-between">
                    <Link to={`/perfil/${post.user.id}`} className="flex items-center gap-3 group">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={post.user.avatar} alt={post.user.name} />
                        <AvatarFallback>{post.user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {post.user.name}
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          {post.user.location} • {formatRelativeTime(post.createdAt)}
                        </p>
                      </div>
                    </Link>
                    <Button variant="ghost" size="icon" className="text-muted-foreground">
                      <MoreHorizontal size={20} />
                    </Button>
                  </div>

                  {/* Post Content */}
                  <div className="px-4 pb-4">
                    <p className="text-foreground leading-relaxed">{post.content}</p>
                  </div>

                  {/* Post Image */}
                  {post.image && (
                    <div className="aspect-[4/3] bg-secondary">
                      <img
                        src={post.image}
                        alt="Post"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  {/* Post Actions */}
                  <div className="p-4 border-t border-border">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        <button
                          onClick={() => handleLike(post.id)}
                          className={cn(
                            'flex items-center gap-2 transition-colors',
                            likedPosts.includes(post.id)
                              ? 'text-red-500'
                              : 'text-muted-foreground hover:text-red-500'
                          )}
                        >
                          <Heart
                            size={20}
                            fill={likedPosts.includes(post.id) ? 'currentColor' : 'none'}
                          />
                          <span className="text-sm font-medium">{post.likes}</span>
                        </button>
                        <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                          <MessageCircle size={20} />
                          <span className="text-sm font-medium">{post.comments}</span>
                        </button>
                      </div>
                      <button className="text-muted-foreground hover:text-primary transition-colors">
                        <Share2 size={20} />
                      </button>
                    </div>
                  </div>

                  {/* Comment Input */}
                  <div className="px-4 pb-4">
                    <div className="flex gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={mockUsers[0].avatar} alt="Você" />
                        <AvatarFallback>V</AvatarFallback>
                      </Avatar>
                      <Input
                        placeholder="Escreva um comentário..."
                        className="flex-1 bg-secondary border-0"
                      />
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <Button variant="outline">Carregar mais publicações</Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Feed;
