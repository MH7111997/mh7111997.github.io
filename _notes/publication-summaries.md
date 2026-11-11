# Publication summaries

## Ulam Rank Aggregation Is Hard to Approximate for Four Rankings

Given a set of input rankings, how hard is it to find a consensus ranking that minimizes the total Ulam distance (equivalently, maximizes the sum of LCS lengths) to the inputs? For three rankings, the problem is solvable in polynomial time, while for an unbounded number of rankings, it is NP-hard. Furthermore, the best known approximation factor for the problem is $1.968$. This leaves open what happens when the number of input rankings is a fixed constant greater than $3$, and whether there are better approximation algorithms---in particular, a PTAS. We resolve both questions: already for \emph{four} input rankings, we show that the problem is NP-hard to approximate within a factor better than $35/34$. Thus, three rankings is easy, but even four rules out a PTAS.

## An Optimal Algorithm for Binary Closest String

Given a set of binary strings, the Closest String problem asks whether there is a string within Hamming distance at most $d$ from all the input strings. We give a simple random-walk-based randomized algorithm that runs in $O^*(4^d)$, improving upon the previously best known running time of $O^*(5^d)$. The ``Optimal'' in the title is a remnant of the time before the recent claimed refutations of ETH: our running time matched a previously known SETH-based lower bound.

## Constant Rate Isometric Embeddings of Hamming Metric into Edit Metric

This paper aims to answer the following question: how efficiently can Hamming distances be represented \emph{exactly} within the edit metric? More formally, consider a function $\varphi : \{0,1\}^n \to \{0,1\}^N$ such that for all $x,y \in \{0,1\}^n$, the edit distance between $\varphi(x)$ and $\varphi(y)$ equals the Hamming distance between $x$ and $y$. How large can the rate $n/N$ be? Prior to our work, the best known constructions achieved rate $\Theta(1/\log n)$. In this paper, we construct an efficiently computable $\varphi$ with rate $1/8$, giving the first constant-rate isometric embedding of the Hamming metric into the edit metric. Our construction combines \emph{synchronization strings} from the insertion-deletion codes literature with ``locally good'' objects that we find using computer search.

## Algorithmic Improvements to List Decoding of Folded Reed–Solomon Codes

In this paper, we give an algorithm to list decode Folded Reed--Solomon (FRS) codes of rate \(R\) and block length \(n\) up to radius \(1 - R - \varepsilon\) in fully polynomial time \(\mathrm{poly}(1/\varepsilon) \cdot \widetilde{O}(n)\). The template of the algorithm is not new: from the received word, we first compute an constant-dimensional affine subspace containing the list, and then repeatedly sample coordinates and throw away codewords that disagree with the received word on the sampled coordinates until the subspace shrinks to a point. Our main contribution is in how we sample the coordinates: we show that if, instead of a uniform distribution, we use an adaptive distribution that exploits the ``subspace design'' property of FRS codes, every list codeword has a substantially higher probability of surviving this pruning process. Thus, to recover the entire list, we need to repeat this pruning process much fewer times.

## Hardness of Median and Center in the Ulam Metric

This paper is a collection of hardness reductions for rank aggregation problems in the Ulam metric. We show that the \emph{continuous} version of the Ulam median problem (where the median can be any permutation) is NP-hard, whereas the \emph{discrete} version (where the median must be chosen from the input set) cannot be solved significantly faster than the naive all-pairs algorithm under SETH. We also obtain a matching fine-grained lower bound for the discrete Ulam center problem under Quantified SETH.

## Explicit Good Codes Approaching Distance 1 in Ulam Metric

How large a collection of permutations on $[n]$ can we explicitly construct such that any two distinct permutations have longest common subsequence (LCS) at most $\varepsilon n$? In this paper, we construct such a family of size at least $(n!)^{\Omega_\varepsilon(1)}$, for every fixed $\varepsilon>0$ and infinitely many $n$. We enforce the pairwise LCS bound via a mechanism akin to code concatenation, and overcome the main challenge---keeping the collection of permutations sufficiently large---by borrowing a clever idea from Goldreich and Wigderson.
