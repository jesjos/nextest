(function() {var implementors = {
"arrayvec":[["impl&lt;A:&nbsp;<a class=\"trait\" href=\"arrayvec/trait.Array.html\" title=\"trait arrayvec::Array\">Array</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;&lt;A as <a class=\"trait\" href=\"arrayvec/trait.Array.html\" title=\"trait arrayvec::Array\">Array</a>&gt;::<a class=\"associatedtype\" href=\"arrayvec/trait.Array.html#associatedtype.Item\" title=\"type arrayvec::Array::Item\">Item</a>&gt; for <a class=\"struct\" href=\"arrayvec/struct.ArrayVec.html\" title=\"struct arrayvec::ArrayVec\">ArrayVec</a>&lt;A&gt;"]],
"axum":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"axum/routing/struct.MethodFilter.html\" title=\"struct axum::routing::MethodFilter\">MethodFilter</a>&gt; for <a class=\"struct\" href=\"axum/routing/struct.MethodFilter.html\" title=\"struct axum::routing::MethodFilter\">MethodFilter</a>"]],
"bit_set":[["impl&lt;B:&nbsp;<a class=\"trait\" href=\"bit_vec/trait.BitBlock.html\" title=\"trait bit_vec::BitBlock\">BitBlock</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.66.0/std/primitive.usize.html\">usize</a>&gt; for <a class=\"struct\" href=\"bit_set/struct.BitSet.html\" title=\"struct bit_set::BitSet\">BitSet</a>&lt;B&gt;"]],
"bit_vec":[["impl&lt;B:&nbsp;<a class=\"trait\" href=\"bit_vec/trait.BitBlock.html\" title=\"trait bit_vec::BitBlock\">BitBlock</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.66.0/std/primitive.bool.html\">bool</a>&gt; for <a class=\"struct\" href=\"bit_vec/struct.BitVec.html\" title=\"struct bit_vec::BitVec\">BitVec</a>&lt;B&gt;"]],
"bytes":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.66.0/std/primitive.u8.html\">u8</a>&gt; for <a class=\"struct\" href=\"bytes/struct.Bytes.html\" title=\"struct bytes::Bytes\">Bytes</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.66.0/std/primitive.u8.html\">u8</a>&gt; for <a class=\"struct\" href=\"bytes/struct.BytesMut.html\" title=\"struct bytes::BytesMut\">BytesMut</a>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;&amp;'a <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.66.0/std/primitive.u8.html\">u8</a>&gt; for <a class=\"struct\" href=\"bytes/struct.BytesMut.html\" title=\"struct bytes::BytesMut\">BytesMut</a>"]],
"camino":[["impl&lt;P:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"camino/struct.Utf8Path.html\" title=\"struct camino::Utf8Path\">Utf8Path</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;P&gt; for <a class=\"struct\" href=\"camino/struct.Utf8PathBuf.html\" title=\"struct camino::Utf8PathBuf\">Utf8PathBuf</a>"]],
"fixedbitset":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.66.0/core/primitive.usize.html\">usize</a>&gt; for <a class=\"struct\" href=\"fixedbitset/struct.FixedBitSet.html\" title=\"struct fixedbitset::FixedBitSet\">FixedBitSet</a>"]],
"futures_util":[["impl&lt;F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;F&gt; for <a class=\"struct\" href=\"futures_util/future/struct.JoinAll.html\" title=\"struct futures_util::future::JoinAll\">JoinAll</a>&lt;F&gt;"],["impl&lt;Fut:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;Fut&gt; for <a class=\"struct\" href=\"futures_util/future/struct.SelectAll.html\" title=\"struct futures_util::future::SelectAll\">SelectAll</a>&lt;Fut&gt;"],["impl&lt;F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;F&gt; for <a class=\"struct\" href=\"futures_util/future/struct.TryJoinAll.html\" title=\"struct futures_util::future::TryJoinAll\">TryJoinAll</a>&lt;F&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"futures_util/future/trait.TryFuture.html\" title=\"trait futures_util::future::TryFuture\">TryFuture</a>,</span>"],["impl&lt;Fut:&nbsp;<a class=\"trait\" href=\"futures_util/future/trait.TryFuture.html\" title=\"trait futures_util::future::TryFuture\">TryFuture</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;Fut&gt; for <a class=\"struct\" href=\"futures_util/future/struct.SelectOk.html\" title=\"struct futures_util::future::SelectOk\">SelectOk</a>&lt;Fut&gt;"],["impl&lt;Fut:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;Fut&gt; for <a class=\"struct\" href=\"futures_util/stream/struct.FuturesOrdered.html\" title=\"struct futures_util::stream::FuturesOrdered\">FuturesOrdered</a>&lt;Fut&gt;"],["impl&lt;Fut&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;Fut&gt; for <a class=\"struct\" href=\"futures_util/stream/struct.FuturesUnordered.html\" title=\"struct futures_util::stream::FuturesUnordered\">FuturesUnordered</a>&lt;Fut&gt;"],["impl&lt;St:&nbsp;<a class=\"trait\" href=\"futures_util/stream/trait.Stream.html\" title=\"trait futures_util::stream::Stream\">Stream</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;St&gt; for <a class=\"struct\" href=\"futures_util/stream/struct.SelectAll.html\" title=\"struct futures_util::stream::SelectAll\">SelectAll</a>&lt;St&gt;"]],
"hashbrown":[["impl&lt;K, V, S, A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.66.0/std/primitive.tuple.html\">(K, V)</a>&gt; for <a class=\"struct\" href=\"hashbrown/hash_map/struct.HashMap.html\" title=\"struct hashbrown::hash_map::HashMap\">HashMap</a>&lt;K, V, S, A&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + Allocator + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</span>"],["impl&lt;T, S, A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;T&gt; for <a class=\"struct\" href=\"hashbrown/hash_set/struct.HashSet.html\" title=\"struct hashbrown::hash_set::HashSet\">HashSet</a>&lt;T, S, A&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + Allocator + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</span>"]],
"http":[["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;(<a class=\"struct\" href=\"http/header/struct.HeaderName.html\" title=\"struct http::header::HeaderName\">HeaderName</a>, T)&gt; for <a class=\"struct\" href=\"http/header/struct.HeaderMap.html\" title=\"struct http::header::HeaderMap\">HeaderMap</a>&lt;T&gt;"]],
"indexmap":[["impl&lt;K, V, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.66.0/std/primitive.tuple.html\">(K, V)</a>&gt; for <a class=\"struct\" href=\"indexmap/map/struct.IndexMap.html\" title=\"struct indexmap::map::IndexMap\">IndexMap</a>&lt;K, V, S&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,</span>"],["impl&lt;T, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;T&gt; for <a class=\"struct\" href=\"indexmap/set/struct.IndexSet.html\" title=\"struct indexmap::set::IndexSet\">IndexSet</a>&lt;T, S&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,</span>"]],
"nested":[["impl&lt;T:&nbsp;<a class=\"trait\" href=\"nested/trait.Collection.html\" title=\"trait nested::Collection\">Collection</a>, A:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"type\" href=\"nested/type.Item.html\" title=\"type nested::Item\">Item</a>&lt;T&gt;&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;A&gt; for <a class=\"struct\" href=\"nested/struct.Nested.html\" title=\"struct nested::Nested\">Nested</a>&lt;T&gt;"]],
"nix":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"nix/fcntl/struct.AtFlags.html\" title=\"struct nix::fcntl::AtFlags\">AtFlags</a>&gt; for <a class=\"struct\" href=\"nix/fcntl/struct.AtFlags.html\" title=\"struct nix::fcntl::AtFlags\">AtFlags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"nix/sys/signal/struct.SaFlags.html\" title=\"struct nix::sys::signal::SaFlags\">SaFlags</a>&gt; for <a class=\"struct\" href=\"nix/sys/signal/struct.SaFlags.html\" title=\"struct nix::sys::signal::SaFlags\">SaFlags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"enum\" href=\"nix/sys/signal/enum.Signal.html\" title=\"enum nix::sys::signal::Signal\">Signal</a>&gt; for <a class=\"struct\" href=\"nix/sys/signal/struct.SigSet.html\" title=\"struct nix::sys::signal::SigSet\">SigSet</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"nix/sys/signalfd/struct.SfdFlags.html\" title=\"struct nix::sys::signalfd::SfdFlags\">SfdFlags</a>&gt; for <a class=\"struct\" href=\"nix/sys/signalfd/struct.SfdFlags.html\" title=\"struct nix::sys::signalfd::SfdFlags\">SfdFlags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"nix/sys/wait/struct.WaitPidFlag.html\" title=\"struct nix::sys::wait::WaitPidFlag\">WaitPidFlag</a>&gt; for <a class=\"struct\" href=\"nix/sys/wait/struct.WaitPidFlag.html\" title=\"struct nix::sys::wait::WaitPidFlag\">WaitPidFlag</a>"]],
"proc_macro2":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"enum\" href=\"proc_macro2/enum.TokenTree.html\" title=\"enum proc_macro2::TokenTree\">TokenTree</a>&gt; for <a class=\"struct\" href=\"proc_macro2/struct.TokenStream.html\" title=\"struct proc_macro2::TokenStream\">TokenStream</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"proc_macro2/struct.TokenStream.html\" title=\"struct proc_macro2::TokenStream\">TokenStream</a>&gt; for <a class=\"struct\" href=\"proc_macro2/struct.TokenStream.html\" title=\"struct proc_macro2::TokenStream\">TokenStream</a>"]],
"rustix":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"rustix/io/epoll/struct.CreateFlags.html\" title=\"struct rustix::io::epoll::CreateFlags\">CreateFlags</a>&gt; for <a class=\"struct\" href=\"rustix/io/epoll/struct.CreateFlags.html\" title=\"struct rustix::io::epoll::CreateFlags\">CreateFlags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"rustix/io/epoll/struct.EventFlags.html\" title=\"struct rustix::io::epoll::EventFlags\">EventFlags</a>&gt; for <a class=\"struct\" href=\"rustix/io/epoll/struct.EventFlags.html\" title=\"struct rustix::io::epoll::EventFlags\">EventFlags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"rustix/io/struct.PollFlags.html\" title=\"struct rustix::io::PollFlags\">PollFlags</a>&gt; for <a class=\"struct\" href=\"rustix/io/struct.PollFlags.html\" title=\"struct rustix::io::PollFlags\">PollFlags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"rustix/io/struct.FdFlags.html\" title=\"struct rustix::io::FdFlags\">FdFlags</a>&gt; for <a class=\"struct\" href=\"rustix/io/struct.FdFlags.html\" title=\"struct rustix::io::FdFlags\">FdFlags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"rustix/io/struct.ReadWriteFlags.html\" title=\"struct rustix::io::ReadWriteFlags\">ReadWriteFlags</a>&gt; for <a class=\"struct\" href=\"rustix/io/struct.ReadWriteFlags.html\" title=\"struct rustix::io::ReadWriteFlags\">ReadWriteFlags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"rustix/io/struct.SpliceFlags.html\" title=\"struct rustix::io::SpliceFlags\">SpliceFlags</a>&gt; for <a class=\"struct\" href=\"rustix/io/struct.SpliceFlags.html\" title=\"struct rustix::io::SpliceFlags\">SpliceFlags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"rustix/io/struct.DupFlags.html\" title=\"struct rustix::io::DupFlags\">DupFlags</a>&gt; for <a class=\"struct\" href=\"rustix/io/struct.DupFlags.html\" title=\"struct rustix::io::DupFlags\">DupFlags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"rustix/io/struct.PipeFlags.html\" title=\"struct rustix::io::PipeFlags\">PipeFlags</a>&gt; for <a class=\"struct\" href=\"rustix/io/struct.PipeFlags.html\" title=\"struct rustix::io::PipeFlags\">PipeFlags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"rustix/io/struct.EventfdFlags.html\" title=\"struct rustix::io::EventfdFlags\">EventfdFlags</a>&gt; for <a class=\"struct\" href=\"rustix/io/struct.EventfdFlags.html\" title=\"struct rustix::io::EventfdFlags\">EventfdFlags</a>"]],
"semver":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"semver/struct.Comparator.html\" title=\"struct semver::Comparator\">Comparator</a>&gt; for <a class=\"struct\" href=\"semver/struct.VersionReq.html\" title=\"struct semver::VersionReq\">VersionReq</a>"]],
"serde_json":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;(<a class=\"struct\" href=\"https://doc.rust-lang.org/1.66.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>, <a class=\"enum\" href=\"serde_json/enum.Value.html\" title=\"enum serde_json::Value\">Value</a>)&gt; for <a class=\"struct\" href=\"serde_json/struct.Map.html\" title=\"struct serde_json::Map\">Map</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.66.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>, <a class=\"enum\" href=\"serde_json/enum.Value.html\" title=\"enum serde_json::Value\">Value</a>&gt;"],["impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"serde_json/enum.Value.html\" title=\"enum serde_json::Value\">Value</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;T&gt; for <a class=\"enum\" href=\"serde_json/enum.Value.html\" title=\"enum serde_json::Value\">Value</a>"],["impl&lt;K:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.66.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;, V:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"serde_json/enum.Value.html\" title=\"enum serde_json::Value\">Value</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.66.0/std/primitive.tuple.html\">(K, V)</a>&gt; for <a class=\"enum\" href=\"serde_json/enum.Value.html\" title=\"enum serde_json::Value\">Value</a>"]],
"slab":[["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;(<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.66.0/std/primitive.usize.html\">usize</a>, T)&gt; for <a class=\"struct\" href=\"slab/struct.Slab.html\" title=\"struct slab::Slab\">Slab</a>&lt;T&gt;"]],
"smallvec":[["impl&lt;A:&nbsp;<a class=\"trait\" href=\"smallvec/trait.Array.html\" title=\"trait smallvec::Array\">Array</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;&lt;A as <a class=\"trait\" href=\"smallvec/trait.Array.html\" title=\"trait smallvec::Array\">Array</a>&gt;::<a class=\"associatedtype\" href=\"smallvec/trait.Array.html#associatedtype.Item\" title=\"type smallvec::Array::Item\">Item</a>&gt; for <a class=\"struct\" href=\"smallvec/struct.SmallVec.html\" title=\"struct smallvec::SmallVec\">SmallVec</a>&lt;A&gt;"]],
"syn":[["impl&lt;T, P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;T&gt; for <a class=\"struct\" href=\"syn/punctuated/struct.Punctuated.html\" title=\"struct syn::punctuated::Punctuated\">Punctuated</a>&lt;T, P&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,</span>"],["impl&lt;T, P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"enum\" href=\"syn/punctuated/enum.Pair.html\" title=\"enum syn::punctuated::Pair\">Pair</a>&lt;T, P&gt;&gt; for <a class=\"struct\" href=\"syn/punctuated/struct.Punctuated.html\" title=\"struct syn::punctuated::Punctuated\">Punctuated</a>&lt;T, P&gt;"]],
"tinyvec":[["impl&lt;A:&nbsp;<a class=\"trait\" href=\"tinyvec/trait.Array.html\" title=\"trait tinyvec::Array\">Array</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;&lt;A as <a class=\"trait\" href=\"tinyvec/trait.Array.html\" title=\"trait tinyvec::Array\">Array</a>&gt;::<a class=\"associatedtype\" href=\"tinyvec/trait.Array.html#associatedtype.Item\" title=\"type tinyvec::Array::Item\">Item</a>&gt; for <a class=\"struct\" href=\"tinyvec/struct.ArrayVec.html\" title=\"struct tinyvec::ArrayVec\">ArrayVec</a>&lt;A&gt;"],["impl&lt;A:&nbsp;<a class=\"trait\" href=\"tinyvec/trait.Array.html\" title=\"trait tinyvec::Array\">Array</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;&lt;A as <a class=\"trait\" href=\"tinyvec/trait.Array.html\" title=\"trait tinyvec::Array\">Array</a>&gt;::<a class=\"associatedtype\" href=\"tinyvec/trait.Array.html#associatedtype.Item\" title=\"type tinyvec::Array::Item\">Item</a>&gt; for <a class=\"enum\" href=\"tinyvec/enum.TinyVec.html\" title=\"enum tinyvec::TinyVec\">TinyVec</a>&lt;A&gt;"]],
"tokio_stream":[["impl&lt;K, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.66.0/std/primitive.tuple.html\">(K, V)</a>&gt; for <a class=\"struct\" href=\"tokio_stream/struct.StreamMap.html\" title=\"struct tokio_stream::StreamMap\">StreamMap</a>&lt;K, V&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,</span>"]],
"toml":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;(<a class=\"struct\" href=\"https://doc.rust-lang.org/1.66.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>, <a class=\"enum\" href=\"toml/value/enum.Value.html\" title=\"enum toml::value::Value\">Value</a>)&gt; for <a class=\"struct\" href=\"toml/map/struct.Map.html\" title=\"struct toml::map::Map\">Map</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.66.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>, <a class=\"enum\" href=\"toml/value/enum.Value.html\" title=\"enum toml::value::Value\">Value</a>&gt;"]],
"toml_edit":[["impl&lt;V:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"toml_edit/enum.Value.html\" title=\"enum toml_edit::Value\">Value</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;V&gt; for <a class=\"struct\" href=\"toml_edit/struct.Array.html\" title=\"struct toml_edit::Array\">Array</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"toml_edit/struct.Table.html\" title=\"struct toml_edit::Table\">Table</a>&gt; for <a class=\"struct\" href=\"toml_edit/struct.ArrayOfTables.html\" title=\"struct toml_edit::ArrayOfTables\">ArrayOfTables</a>"],["impl&lt;K:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"toml_edit/struct.Key.html\" title=\"struct toml_edit::Key\">Key</a>&gt;, V:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"toml_edit/enum.Value.html\" title=\"enum toml_edit::Value\">Value</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.66.0/std/primitive.tuple.html\">(K, V)</a>&gt; for <a class=\"struct\" href=\"toml_edit/struct.InlineTable.html\" title=\"struct toml_edit::InlineTable\">InlineTable</a>"],["impl&lt;K:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"toml_edit/struct.Key.html\" title=\"struct toml_edit::Key\">Key</a>&gt;, V:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"toml_edit/enum.Value.html\" title=\"enum toml_edit::Value\">Value</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.66.0/std/primitive.tuple.html\">(K, V)</a>&gt; for <a class=\"struct\" href=\"toml_edit/struct.Table.html\" title=\"struct toml_edit::Table\">Table</a>"],["impl&lt;V:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"toml_edit/enum.Value.html\" title=\"enum toml_edit::Value\">Value</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;V&gt; for <a class=\"enum\" href=\"toml_edit/enum.Value.html\" title=\"enum toml_edit::Value\">Value</a>"],["impl&lt;K:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"toml_edit/struct.Key.html\" title=\"struct toml_edit::Key\">Key</a>&gt;, V:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"toml_edit/enum.Value.html\" title=\"enum toml_edit::Value\">Value</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.66.0/std/primitive.tuple.html\">(K, V)</a>&gt; for <a class=\"enum\" href=\"toml_edit/enum.Value.html\" title=\"enum toml_edit::Value\">Value</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;(<a class=\"struct\" href=\"https://doc.rust-lang.org/1.66.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>, <a class=\"enum\" href=\"toml_edit/easy/value/enum.Value.html\" title=\"enum toml_edit::easy::value::Value\">Value</a>)&gt; for <a class=\"struct\" href=\"toml_edit/easy/map/struct.Map.html\" title=\"struct toml_edit::easy::map::Map\">Map</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.66.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>, <a class=\"enum\" href=\"toml_edit/easy/value/enum.Value.html\" title=\"enum toml_edit::easy::value::Value\">Value</a>&gt;"]],
"tracing_subscriber":[["impl&lt;T, L&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.66.0/std/primitive.tuple.html\">(T, L)</a>&gt; for <a class=\"struct\" href=\"tracing_subscriber/filter/targets/struct.Targets.html\" title=\"struct tracing_subscriber::filter::targets::Targets\">Targets</a><span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.66.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.66.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"tracing_subscriber/filter/struct.LevelFilter.html\" title=\"struct tracing_subscriber::filter::LevelFilter\">LevelFilter</a>&gt;,</span>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()